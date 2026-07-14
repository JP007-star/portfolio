"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const categories = [
    { name: "Languages", items: skills.languages, color: "from-indigo-500 to-purple-500" },
    { name: "Cloud & DevOps", items: skills.cloud, color: "from-emerald-500 to-teal-500" },
    { name: "Tools", items: skills.tools, color: "from-amber-500 to-orange-500" },
  ];

  const allSkills = [
    ...skills.languages,
    ...skills.cloud,
    ...skills.tools,
  ];

  return (
    <section id="skills" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400 font-mono text-xs uppercase tracking-[0.2em] mb-3">SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Skills & Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-zinc-900/60 rounded-xl p-6 border border-zinc-800/60"
            >
              <h3 className="text-base font-medium text-white mb-5">{category.name}</h3>
              <div className="space-y-3.5">
                {category.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + index * 0.05, duration: 0.8, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-base font-medium text-white mb-5">All Skills</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {allSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.015 }}
                className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/10 transition-all cursor-default text-sm"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}