"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting for serverless (resets on cold start but effective for spam bursts)
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute

export const sendEmail = async (formData: FormData) => {
  // Rate Limiting Logic
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") ?? "unknown";
  
  const now = Date.now();
  const lastRequestTime = rateLimitMap.get(ip);

  if (lastRequestTime && now - lastRequestTime < RATE_LIMIT_DURATION) {
    return {
      error: "Too many requests. Please wait a minute before sending another message.",
    };
  }
  
  // Update last request time for this IP
  rateLimitMap.set(ip, now);

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Portal <onboarding@resend.dev>",
      to: "prashant.sagar.shakya@gmail.com",
      subject: "Inquiry: Message from Portfolio Contact Form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
