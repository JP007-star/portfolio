"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const categories = [
    { name: "Languages", items: skills.languages, color: "from-blue-500 to-blue-600" },
    { name: "Frameworks", items: skills.frameworks, color: "from-blue-500 to-cyan-500" },
    { name: "Databases", items: skills.databases, color: "from-green-500 to-emerald-500" },
    { name: "DevOps", items: skills.devops, color: "from-orange-500 to-amber-500" },
    { name: "Cloud", items: skills.cloud, color: "from-yellow-500 to-orange-500" },
    { name: "Tools & Practices", items: skills.toolsAndPractices, color: "from-purple-500 to-pink-500" },
  ];

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.databases,
    ...skills.devops,
    ...skills.cloud,
    ...skills.toolsAndPractices,
  ];

  return (
    <section id="skills" className="py-32 bg-slate-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-[0.3em] mb-4">SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Skills & Expertise</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-6 pb-4 border-b border-slate-100 text-center">{category.name}</h3>
              <div className="space-y-4">
                {category.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-base mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
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
          <h3 className="text-2xl font-medium text-slate-900 mb-8">All Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {allSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.015 }}
                className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-base rounded-xl hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-default"
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