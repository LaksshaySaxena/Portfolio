"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import EarthCanvas from "./Earth";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="w-full px-6 md:px-10 py-24 flex justify-center"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0f172a]/70 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(112,66,248,0.15)]"
        >
          <p className="text-purple-400 uppercase tracking-[0.25em] mb-2">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Contact.
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="bg-[#111827] border border-white/10 p-4 rounded-xl text-white outline-none focus:border-purple-500 transition-all"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="bg-[#111827] border border-white/10 p-4 rounded-xl text-white outline-none focus:border-purple-500 transition-all"
              required
            />

            <textarea
              rows={7}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="bg-[#111827] border border-white/10 p-4 rounded-xl text-white outline-none resize-none focus:border-purple-500 transition-all"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[rgb(112,66,248)] hover:bg-purple-700 transition-all rounded-xl py-4 text-white font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Earth */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[500px] md:h-[550px] w-full relative"
        >
          <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />

          <EarthCanvas />
        </motion.div>

      </div>
    </section>
  );
};