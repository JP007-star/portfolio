"use client";

import { motion } from "framer-motion";
import { personalInfo, bio, skills } from "@/data/portfolio";

export default function About() {
  const allSkills = [...skills.languages, ...skills.cloud, ...skills.tools];

  return (
    <section id="about" className="py-32 bg-[#0a0a0f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-[0.2em] mb-3">ABOUT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-zinc-900/60 rounded-2xl p-8 border border-zinc-800/60">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {bio.yearsOfExperience}+ Years of Experience
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8">{bio.full}</p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Location", value: personalInfo.location },
                  { label: "Email", value: personalInfo.email },
                  { label: "Phone", value: personalInfo.phone },
                  { label: "Freelance", value: "Available", highlight: true },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-zinc-900 rounded-xl p-4 border border-zinc-800/50"
                  >
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1.5">
                      {item.label}
                    </p>
                    <p
                      className={`text-sm font-medium truncate ${
                        item.highlight ? "text-green-400" : "text-zinc-200"
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h3 className="text-xl font-semibold text-white mb-5">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {allSkills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  className="px-3.5 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-zinc-300 hover:border-indigo-500/50 hover:text-indigo-300 hover:bg-indigo-500/10 transition-all cursor-default text-sm"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>

            <div className="bg-zinc-900/60 rounded-2xl p-6 border border-zinc-800/60">
              <h4 className="text-lg font-medium text-white mb-3">Leadership Philosophy</h4>
              <p className="text-zinc-400 leading-relaxed">
                Building scalable systems and leading teams to deliver exceptional results.
                Focused on continuous learning, mentoring junior developers, and implementing
                best practices in software development and DevOps.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}