"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGoogle,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[180px] rounded-full" />

      <div className="max-w-6xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-4"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black mb-8"
        >
          Contact Me
        </motion.h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
          Open to opportunities in Artificial Intelligence, Data Analytics,
          Research, Operations, Documentation, IT and Non-IT roles.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          <a
            href="mailto:gowthamk15112003@gmail.com"
            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400 transition-all duration-300"
          >
            <FaEnvelope className="text-3xl mx-auto mb-4 text-cyan-400" />
            <p className="font-semibold">Email</p>
          </a>

          <a
            href="tel:+918056997993"
            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400 transition-all duration-300"
          >
            <FaPhone className="text-3xl mx-auto mb-4 text-cyan-400" />
            <p className="font-semibold">Phone</p>
          </a>

          <a
            href="https://linkedin.com/in/gowtham-kathirvel-116177262"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400 transition-all duration-300"
          >
            <FaLinkedin className="text-3xl mx-auto mb-4 text-cyan-400" />
            <p className="font-semibold">LinkedIn</p>
          </a>

          <a
            href="https://github.com/GowthamK69"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400 transition-all duration-300"
          >
            <FaGithub className="text-3xl mx-auto mb-4 text-cyan-400" />
            <p className="font-semibold">GitHub</p>
          </a>

          <a
            href="https://scholar.google.com/citations?user=oA9DGtoAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400 transition-all duration-300"
          >
            <FaGoogle className="text-3xl mx-auto mb-4 text-cyan-400" />
            <p className="font-semibold">Scholar</p>
          </a>

        </div>

      </div>
    </section>
  );
}