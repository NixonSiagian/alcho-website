"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = "6281234567890";
  const message = encodeURIComponent(
    "Hi Alcho! I'd love to learn more about your seasoning products. 🌶️"
  );
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white dark:bg-brown-900 rounded-2xl shadow-xl p-4 max-w-xs border border-brown-100 dark:border-brown-700"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <p className="font-semibold text-brown-800 dark:text-cream-100 text-sm">Chat with Us!</p>
                <p className="text-brown-500 dark:text-brown-300 text-xs mt-0.5">
                  We typically reply within minutes
                </p>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-brown-400 hover:text-brown-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-xl text-center transition-colors"
            >
              Start Conversation →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
      </motion.button>
    </div>
  );
}
