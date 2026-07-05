import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Portfolio Inquiry from {senderEmail}</Preview>
      <Body style={{ backgroundColor: "#ffffff", color: "#1e293b", fontFamily: "sans-serif", margin: 0, padding: 0 }}>
        {/* Full-bleed Outer Wrapper Section (No margins or paddings) */}
        <Section style={{ width: "100%", backgroundColor: "#ffffff", margin: 0, padding: 0 }} align="center">
          
          {/* Main Content Card (Stretches flush to screen edges on mobile) */}
          <Section 
            align="center" 
            style={{ backgroundColor: "#ffffff", width: "100%", maxWidth: "600px", textAlign: "left", overflow: "hidden", margin: "0 auto" }}
          >
            
            {/* Premium Header Accent Bar (Flush at the top) */}
            <Section style={{ backgroundColor: "#0f172a", paddingTop: "40px", paddingBottom: "40px", paddingLeft: "24px", paddingRight: "24px", borderBottom: "4px solid #3b82f6", textAlign: "center" }} align="center">
              <Heading style={{ color: "#ffffff", fontSize: "20px", fontWeight: "bold", letterSpacing: "0.05em", margin: 0, textTransform: "uppercase", lineHeight: 1.375 }}>
                Portfolio Contact Inquiry
              </Heading>
            </Section>

            {/* Spacious Body Section */}
            <Section style={{ paddingTop: "40px", paddingBottom: "40px", paddingLeft: "12px", paddingRight: "12px" }}>
              
              {/* Introduction & Greetings */}
              <Text style={{ fontSize: "16px", fontWeight: "bold", color: "#0f172a", margin: 0, paddingLeft: "4px", paddingRight: "4px" }}>
                Hello Prashant,
              </Text>
              <Text style={{ fontSize: "14px", lineHeight: 1.625, color: "#475569", marginTop: "12px", marginBottom: "24px", paddingLeft: "4px", paddingRight: "4px" }}>
                This is a secure notification. A visitor has submitted a new inquiry through the contact form on your portfolio website. Below are the details of the communication log:
              </Text>
              
              {/* Visual Quotation Block (Expanded width, reduced padding) */}
              <Section style={{ backgroundColor: "#f8fafc", borderLeft: "4px solid #3b82f6", borderTopRightRadius: "8px", borderBottomRightRadius: "8px", paddingTop: "12px", paddingBottom: "12px", paddingLeft: "16px", paddingRight: "16px", marginTop: "20px", marginBottom: "20px", boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)" }}>
                <Text style={{ fontSize: "11px", textTransform: "uppercase", color: "#64748b", fontWeight: "bold", letterSpacing: "0.1em", margin: 0, marginBottom: "8px" }}>
                  Message Body
                </Text>
                <Text style={{ fontSize: "14px", lineHeight: 1.625, color: "#0f172a", whiteSpace: "pre-wrap", margin: 0, fontStyle: "italic", fontWeight: 500, wordBreak: "break-word" }}>
                  "{message}"
                </Text>
              </Section>

              <Hr style={{ borderColor: "#e2e8f0", marginTop: "24px", marginBottom: "24px" }} />

              {/* Highly Structured Metadata Dashboard (Expanded width, reduced padding) */}
              <Section style={{ backgroundColor: "#f1f5f9", borderRadius: "8px", paddingTop: "16px", paddingBottom: "16px", paddingLeft: "16px", paddingRight: "16px" }}>
                <Text style={{ fontSize: "12px", textTransform: "uppercase", color: "#64748b", fontWeight: "bold", letterSpacing: "0.1em", margin: 0, marginBottom: "16px" }}>
                  Submission Data Log
                </Text>
                
                {/* Grid list elements */}
                <Section style={{ marginBottom: "16px" }}>
                  <Text style={{ fontSize: "10px", fontWeight: "bold", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0, marginBottom: "4px" }}>
                    Sender Email Address
                  </Text>
                  <Link 
                    href={`mailto:${senderEmail}`} 
                    style={{ fontSize: "14px", color: "#2563eb", fontFamily: "monospace", textDecoration: "underline", wordBreak: "break-all", margin: 0, fontWeight: 500 }}
                  >
                    {senderEmail}
                  </Link>
                </Section>

                <Section style={{ marginBottom: "16px" }}>
                  <Text style={{ fontSize: "10px", fontWeight: "bold", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0, marginBottom: "4px" }}>
                    Submission Source
                  </Text>
                  <Text style={{ fontSize: "14px", color: "#334155", margin: 0, fontWeight: 500 }}>
                    Personal Portfolio Form
                  </Text>
                </Section>
                
                <Section>
                  <Text style={{ fontSize: "10px", fontWeight: "bold", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0, marginBottom: "4px" }}>
                    Date & Time Received
                  </Text>
                  <Text style={{ fontSize: "14px", color: "#334155", margin: 0, fontWeight: 500 }}>
                    {new Date().toLocaleDateString(undefined, {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZoneName: 'short'
                    })}
                  </Text>
                </Section>
              </Section>

              {/* Direct Action Button */}
              <Section style={{ textAlign: "center", marginTop: "24px", marginBottom: "8px" }} align="center">
                <Link
                  href={`mailto:${senderEmail}`}
                  style={{ display: "inline-block", backgroundColor: "#2563eb", color: "#ffffff", fontWeight: 600, fontSize: "14px", paddingTop: "12px", paddingBottom: "12px", paddingLeft: "24px", paddingRight: "24px", borderRadius: "8px", textDecoration: "none" }}
                >
                  Reply to Sender
                </Link>
              </Section>
            </Section>

            {/* Professional Footer & Security Notice */}
            <Section style={{ backgroundColor: "#f8fafc", paddingTop: "48px", paddingBottom: "48px", paddingLeft: "24px", paddingRight: "24px", borderTop: "1px solid #e2e8f0", textAlign: "center" }} align="center">
              <Text style={{ fontSize: "11px", color: "#94a3b8", margin: 0, lineHeight: 1.625 }}>
                This message was transmitted using secure SSL encryption via your portfolio server actions.
                <br />
                Please review the sender's credentials before replying or taking further action.
              </Text>
            </Section>
          </Section>
        </Section>
      </Body>
    </Html>
  );
}
