"use client";

import { motion } from "framer-motion";
import { personalInfo, bio, skills, certifications, awards } from "@/data/portfolio";

export default function About() {
  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.databases,
    ...skills.devops,
    ...skills.cloud,
    ...skills.toolsAndPractices,
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-[0.3em] mb-4">ABOUT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">About Me</h2>
        </motion.div>

        {/* Summary Section - Prominent like PDF */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              {bio.yearsOfExperience}+ Years of Experience
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              {bio.full}
            </p>
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
          {[
            { label: "Email", value: personalInfo.email, isEmail: true },
            { label: "Phone", value: personalInfo.phone },
            { label: "Location", value: "Tamil Nadu" },
            { label: "Status", value: "Available", highlight: true },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center"
            >
              <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">
                {item.label}
              </p>
              <p
                className={`text-base font-medium truncate ${
                  item.highlight ? "text-green-600" : item.isEmail ? "text-blue-600" : "text-slate-700"
                }`}
              >
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-base rounded-xl hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Awards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-200"
          >
            <h4 className="text-xl font-semibold text-slate-900 mb-6">Certifications</h4>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-700">{cert.title}</p>
                    <p className="text-slate-500 text-sm">{cert.organization} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-200"
          >
            <h4 className="text-xl font-semibold text-slate-900 mb-6">Achievements</h4>
            <div className="space-y-4">
              {awards.slice(0, 4).map((award) => (
                <div key={award.id} className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-700">{award.title}</p>
                    <p className="text-slate-500 text-sm">{award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}