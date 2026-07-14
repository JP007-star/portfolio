"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-[0.2em] mb-3">EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Work Experience</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2" />

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`relative mb-8 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div
                  className={`absolute top-3 w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50 ${
                    index % 2 === 0
                      ? "md:left-1/2 md:-translate-x-1/2 -left-1.5"
                      : "md:left-1/2 md:-translate-x-1/2 -left-1.5"
                  }`}
                />

                <div
                  className={`ml-8 md:ml-0 bg-zinc-900/60 rounded-xl p-6 border border-zinc-800/60 hover:border-indigo-500/30 transition-all ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-indigo-400 font-mono text-xs">
                      {exp.period}
                    </span>
                    <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                    <span className="text-zinc-500 text-sm">{exp.company}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-1.5">{exp.role}</h3>
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-2.5 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full border border-indigo-500/20"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/60 rounded-xl p-5 border border-zinc-800/60 hover:border-zinc-700 transition-all"
              >
                <span className="text-indigo-400 font-mono text-xs">{edu.period}</span>
                <h4 className="text-base font-medium text-white mt-2 mb-1">{edu.degree}</h4>
                <p className="text-zinc-500 text-sm mb-1">{edu.institution}</p>
                <p className="text-zinc-600 text-sm">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}