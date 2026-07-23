"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { personalInfo, bio } from "@/data/portfolio";
import { generatePDF } from "@/utils/generatePDF";

const HeroScene = dynamic(() => import("../3d/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-white" />,
});

export default function Hero() {
  const handleDownloadCV = () => {
    generatePDF();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      <HeroScene />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />

      <div className="relative z-10 w-full container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-600 font-semibold text-sm uppercase tracking-[0.3em] mb-6"
          >
            {personalInfo.title}
          </motion.p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-slate-900 mb-8 leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="block"
            >
              {personalInfo.name.split(" ")[0]}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-blue-600"
            >
              {personalInfo.name.split(" ")[1]}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto mb-12 px-4"
          >
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              {bio.short}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-5"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-blue-600 text-white font-medium text-xl rounded-2xl hover:bg-blue-700 transition-all shadow-lg"
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-slate-100 border-2 border-slate-200 text-slate-700 font-medium text-xl rounded-2xl hover:bg-slate-200 hover:border-slate-300 transition-all"
            >
              Get in Touch
            </motion.a>

            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-10 py-5 text-slate-600 font-medium text-xl rounded-2xl hover:text-blue-600 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-slate-400 rounded-full"
            animate={{ opacity: [1, 0], y: [0, 10] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}