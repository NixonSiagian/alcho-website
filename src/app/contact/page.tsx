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
import { FadeIn } from "@/components/Parallax";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit",
    value: "Jl. Rempah Nusantara No. 12, Jakarta Selatan 12140, Indonesia",
  },
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+62 812-3456-7890",
    href: "tel:+6281234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@alcho.id",
    href: "mailto:hello@alcho.id",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri: 09:00 – 17:00 WIB\nSat: 09:00 – 13:00 WIB",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 lg:pt-40 lg:pb-28 bg-hero-deep overflow-hidden">
        <div className="absolute inset-0 bg-spice-texture pointer-events-none" />
        <div className="absolute -top-20 right-1/4 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-brown-700/30 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn immediate>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span className="h-px w-8 bg-gold-400/60" />
              <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-300">
                Get in Touch
              </span>
              <span className="h-px w-8 bg-gold-400/60" />
            </div>
          </FadeIn>
          <FadeIn immediate delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-cream-50 leading-[1.05] text-balance">
              We'd love to <span className="text-gold-gradient italic">hear</span> from you.
            </h1>
          </FadeIn>
          <FadeIn immediate delay={0.2}>
            <p className="mt-7 max-w-xl mx-auto text-base md:text-lg leading-relaxed text-brown-200">
              Questions about products, bulk orders, or partnerships — our team is here to help.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="py-20 lg:py-28 bg-cream-50 dark:bg-brown-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left — Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-gold-500/60" />
                  <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-700 dark:text-gold-300">
                    Reach Us
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brown-900 dark:text-cream-50 leading-tight">
                  Let's start a conversation.
                </h2>
                <p className="mt-4 text-brown-600 dark:text-brown-300 leading-relaxed">
                  Reach out through any of these channels — we typically respond within one
                  business day.
                </p>
              </FadeIn>

              <div className="mt-9 space-y-4">
                {contactInfo.map((item, i) => (
                  <FadeIn key={item.label} delay={i * 0.07}>
                    <div className="group flex items-start gap-4 bg-cream-100/60 dark:bg-brown-900/60 rounded-2xl p-5 border border-brown-100/70 dark:border-brown-800 hover:border-gold-300/60 dark:hover:border-gold-700/40 transition-all duration-400">
                      <div className="w-11 h-11 rounded-full bg-gold-soft flex items-center justify-center shrink-0 ring-1 ring-gold-300/40 group-hover:scale-105 transition-transform duration-500">
                        <item.icon className="w-5 h-5 text-brown-900" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-gold-700 dark:text-gold-300 mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-brown-900 dark:text-cream-100 text-sm font-medium hover:text-gold-700 dark:hover:text-gold-300 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-brown-900 dark:text-cream-100 text-sm leading-relaxed whitespace-pre-line">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.4}>
                <div className="mt-6 bg-cream-100/60 dark:bg-brown-900/60 rounded-2xl p-5 border border-brown-100/70 dark:border-brown-800">
                  <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-gold-700 dark:text-gold-300 mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-3">
                    {[
                      { icon: Instagram, label: "Instagram" },
                      { icon: Facebook, label: "Facebook" },
                    ].map(({ icon: Icon, label }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={label}
                        className="w-11 h-11 rounded-full bg-cream-50 dark:bg-brown-800 border border-brown-100 dark:border-brown-700 flex items-center justify-center text-brown-700 dark:text-cream-200 hover:bg-gold-soft hover:text-brown-900 hover:border-gold-400/60 transition-all duration-400"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right — Form */}
            <FadeIn delay={0.1} className="lg:col-span-3">
              <div className="bg-cream-100/60 dark:bg-brown-900/60 rounded-[24px] p-7 lg:p-10 border border-brown-100/70 dark:border-brown-800">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center mx-auto mb-5 ring-1 ring-emerald-300/40">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="font-serif text-3xl font-semibold text-brown-900 dark:text-cream-50 mb-3">
                      Message sent
                    </h3>
                    <p className="text-brown-600 dark:text-brown-300 mb-7 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. We'll get back to you within one business day.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-6 py-3 rounded-full border border-brown-200 dark:border-brown-700 text-brown-800 dark:text-cream-100 text-sm font-medium hover:border-gold-400/60 hover:bg-cream-50 dark:hover:bg-brown-800 transition-all"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="h-px w-8 bg-gold-500/60" />
                      <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-700 dark:text-gold-300">
                        Send a Message
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-brown-900 dark:text-cream-50 leading-tight mb-7">
                      Tell us how we can help.
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[11px] font-semibold tracking-wider uppercase text-brown-500 dark:text-brown-300 mb-2">
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-4 py-3.5 rounded-xl bg-cream-50 dark:bg-brown-950/60 border border-brown-100 dark:border-brown-800 text-brown-900 dark:text-cream-100 placeholder-brown-300 dark:placeholder-brown-600 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400/60 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold tracking-wider uppercase text-brown-500 dark:text-brown-300 mb-2">
                            Email <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3.5 rounded-xl bg-cream-50 dark:bg-brown-950/60 border border-brown-100 dark:border-brown-800 text-brown-900 dark:text-cream-100 placeholder-brown-300 dark:placeholder-brown-600 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400/60 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold tracking-wider uppercase text-brown-500 dark:text-brown-300 mb-2">
                          Subject <span className="text-rose-500">*</span>
                        </label>
                        <select
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-cream-50 dark:bg-brown-950/60 border border-brown-100 dark:border-brown-800 text-brown-900 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400/60 transition-all appearance-none"
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
                        <label className="block text-[11px] font-semibold tracking-wider uppercase text-brown-500 dark:text-brown-300 mb-2">
                          Message <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help…"
                          className="w-full px-4 py-3.5 rounded-xl bg-cream-50 dark:bg-brown-950/60 border border-brown-100 dark:border-brown-800 text-brown-900 dark:text-cream-100 placeholder-brown-300 dark:placeholder-brown-600 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400/60 transition-all resize-none leading-relaxed"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-brown-950 font-semibold text-sm transition-all duration-400 ease-luxury hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        style={{
                          backgroundImage: "linear-gradient(135deg, #f5d97a 0%, #e1a82b 50%, #a86c15 100%)",
                          boxShadow: "0 14px 32px -10px rgba(225, 168, 43, 0.5)",
                        }}
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-brown-950/30 border-t-brown-950 rounded-full animate-spin" />
                            Sending…
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
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="bg-cream-50 dark:bg-brown-950 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-[24px] overflow-hidden border border-brown-100/70 dark:border-brown-800 shadow-luxury">
              <iframe
                title="Alcho Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126918.46582574254!2d106.7271892!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1716000000000!5m2!1sen!2sid"
                width="100%"
                height="440"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
