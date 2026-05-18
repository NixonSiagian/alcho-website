"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Send,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Jl. Rempah Nusantara No. 12, Jakarta Selatan 12140, Indonesia",
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/30",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+62 812-3456-7890",
    href: "tel:+6281234567890",
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-950/30",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@alcho.id",
    href: "mailto:hello@alcho.id",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 09:00 – 17:00 WIB\nSat: 09:00 – 13:00 WIB",
    color: "text-gold-600",
    bg: "bg-amber-50 dark:bg-amber-950/30",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-brown-900 to-brown-800 dark:from-brown-950 dark:to-brown-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold-400 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-brown-400 blur-2xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            We&apos;d Love to Hear From You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brown-200 text-lg max-w-xl mx-auto"
          >
            Whether you have a question about our products, want to place a bulk order, or just
            want to share a cooking story — we&apos;re here.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-20 bg-cream-50 dark:bg-brown-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-2xl font-bold text-brown-900 dark:text-cream-50 mb-2">
                  Contact Information
                </h2>
                <p className="text-brown-500 dark:text-brown-300 text-sm leading-relaxed mb-8">
                  Reach us through any of these channels. We typically respond within one business day.
                </p>
              </motion.div>

              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  className="flex items-start gap-4 bg-white dark:bg-brown-900 rounded-2xl p-5 border border-brown-100 dark:border-brown-800 hover:border-gold-200 dark:hover:border-gold-800 transition-colors shadow-sm"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brown-400 dark:text-brown-400 uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-brown-800 dark:text-cream-100 text-sm font-medium hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-brown-800 dark:text-cream-100 text-sm font-medium whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white dark:bg-brown-900 rounded-2xl p-5 border border-brown-100 dark:border-brown-800"
              >
                <p className="text-xs font-semibold text-brown-400 uppercase tracking-wide mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram", color: "hover:bg-pink-500" },
                    { icon: Facebook, label: "Facebook", color: "hover:bg-blue-600" },
                  ].map(({ icon: Icon, label, color }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className={`w-10 h-10 rounded-xl bg-brown-50 dark:bg-brown-800 flex items-center justify-center text-brown-500 dark:text-brown-300 ${color} hover:text-white transition-all duration-200`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="bg-white dark:bg-brown-900 rounded-3xl p-8 border border-brown-100 dark:border-brown-800 shadow-sm">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-brown-800 dark:text-cream-100 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-brown-500 dark:text-brown-300 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within one business day.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                      className="px-6 py-2.5 rounded-full bg-brown-800 text-white text-sm font-medium hover:bg-brown-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl font-bold text-brown-900 dark:text-cream-50 mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-brown-700 dark:text-brown-300 mb-1.5">
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl bg-brown-50 dark:bg-brown-800 border border-brown-200 dark:border-brown-700 text-brown-800 dark:text-cream-100 placeholder-brown-300 dark:placeholder-brown-500 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-brown-700 dark:text-brown-300 mb-1.5">
                            Email Address <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-brown-50 dark:bg-brown-800 border border-brown-200 dark:border-brown-700 text-brown-800 dark:text-cream-100 placeholder-brown-300 dark:placeholder-brown-500 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-brown-700 dark:text-brown-300 mb-1.5">
                          Subject <span className="text-rose-500">*</span>
                        </label>
                        <select
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-brown-50 dark:bg-brown-800 border border-brown-200 dark:border-brown-700 text-brown-800 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Select a subject</option>
                          <option value="product-inquiry">Product Inquiry</option>
                          <option value="bulk-order">Bulk / Wholesale Order</option>
                          <option value="partnership">Partnership</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-brown-700 dark:text-brown-300 mb-1.5">
                          Message <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help..."
                          className="w-full px-4 py-3 rounded-xl bg-brown-50 dark:bg-brown-800 border border-brown-200 dark:border-brown-700 text-brown-800 dark:text-cream-100 placeholder-brown-300 dark:placeholder-brown-500 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brown-800 hover:bg-brown-700 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="pb-0 bg-cream-50 dark:bg-brown-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-brown-200 dark:border-brown-700 shadow-lg"
          >
            <iframe
              title="Alcho Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126918.46582574254!2d106.7271892!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1716000000000!5m2!1sen!2sid"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
