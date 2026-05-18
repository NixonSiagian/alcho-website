"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = "6281234567890";
  const message = encodeURIComponent(
    "Hi Alcho! I'd love to learn more about your seasoning products."
  );
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-brand-deeper rounded-2xl shadow-luxury p-4 max-w-xs border border-brown-800/40"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <p className="font-serif text-base font-semibold text-cream-100">
                  Speak with us
                </p>
                <p className="text-brown-400 text-xs mt-0.5 leading-relaxed">
                  Our team typically replies within minutes.
                </p>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                aria-label="Dismiss"
                className="text-brown-500 hover:text-cream-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 px-4 bg-[#25D366] hover:brightness-105 text-white text-sm font-semibold rounded-xl text-center transition-all duration-300"
            >
              Start Conversation
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center"
        style={{ boxShadow: "0 12px 28px -6px rgba(37, 211, 102, 0.5)" }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-15" />
      </motion.button>
    </div>
  );
}
