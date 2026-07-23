"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-[0.3em] mb-4">EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Work Experience</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2" />

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div
                  className={`absolute top-4 w-4 h-4 bg-blue-600 rounded-full shadow-lg ring-4 ring-white ${
                    index % 2 === 0
                      ? "md:left-1/2 md:-translate-x-1/2 -left-2"
                      : "md:left-1/2 md:-translate-x-1/2 -left-2"
                  }`}
                />

                <div
                  className={`ml-10 md:ml-0 bg-slate-50 rounded-3xl p-8 border border-slate-200 ${
                    index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-blue-600 font-semibold text-sm">
                      {exp.period}
                    </span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full hidden md:block" />
                    <span className="text-slate-500">{exp.company}</span>
                    {exp.location && <span className="text-slate-400">• {exp.location}</span>}
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">{exp.role}</h3>

                  <p className="text-blue-700 font-medium text-base mb-4">{exp.description.split('.')[0]}.</p>

                  <p className="text-slate-600 leading-relaxed mb-5">
                    {exp.description.split('.').slice(1).join('.').trim()}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-100"
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
          <h3 className="text-3xl font-semibold text-slate-900 mb-10 text-center">Education</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center"
              >
                <span className="text-blue-600 font-semibold text-sm">{edu.period}</span>
                <h4 className="text-lg font-medium text-slate-900 mt-3 mb-2">{edu.degree}</h4>
                <p className="text-slate-500 mb-1">{edu.institution}</p>
                <p className="text-slate-600">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}