import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

type SubmitBtnProps = {
  pending: boolean;
};

export default function SubmitBtn({ pending }: SubmitBtnProps) {
  return (
    <motion.button
      type="submit"
      className="group btn-gradient flex items-center justify-center gap-2 h-12 w-[9rem] rounded-full outline-none disabled:opacity-65 disabled:pointer-events-none shadow-lg shadow-cyber-cyan/20 font-semibold tracking-wide text-sm"
      disabled={pending}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          <span>Transmit</span>
          <FaPaperPlane className="text-xs opacity-80 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </motion.button>
  );
}
