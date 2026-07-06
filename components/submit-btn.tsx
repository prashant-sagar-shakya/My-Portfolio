import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      className="group btn-gradient flex items-center justify-center gap-2 h-12 w-[11rem] rounded-full outline-none disabled:opacity-65 disabled:pointer-events-none shadow-lg shadow-cyber-cyan/20 font-semibold tracking-wide text-sm"
      disabled={pending}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {pending ? (
        <div className="flex items-center gap-2">
          <span className="animate-pulse">Transmitting</span>
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -20, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaPaperPlane className="text-xs" />
          </motion.div>
        </div>
      ) : (
        <>
          <span>Transmit</span>
          <FaPaperPlane className="text-xs opacity-80 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </motion.button>
  );
}
