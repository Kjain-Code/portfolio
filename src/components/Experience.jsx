import { motion } from "framer-motion"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { FiBriefcase } from "react-icons/fi"

const experience = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Tech Spire Solutions",
    duration: "June 2026 — Present",
    type: "Full-time",
    color: "teal",
    points: [
      "Designing and developing scalable full stack web applications using modern frontend and backend technologies.",
      "Contributing to product architecture decisions and collaborating with cross-functional teams to deliver high-quality solutions.",
      "Writing clean, maintainable code with a focus on performance, accessibility, and user experience.",
    ],
  },
  {
    id: 2,
    role: "Web Development & AI Intern",
    company: "OpenBlockAI",
    duration: "Dec 2025 – Feb 2026",
    type: "Internship · Remote",
    color: "purple",
    points: [
      "Built 10+ responsive, reusable frontend components using React.js, improving UI consistency across the platform.",
      "Integrated REST APIs, authentication flows, and real-time data handling to enable seamless user experiences.",
      "Collaborated with cross-functional backend and product teams in an Agile/Scrum environment.",
    ],
  },
  {
    id: 3,
    role: "Python Development Intern",
    company: "OctaNet Services Pvt. Ltd.",
    duration: "Aug 2024 – Sep 2024",
    type: "Internship · Remote",
    color: "teal",
    points: [
      "Developed a Python-based ATM simulation implementing core banking logic with modular, maintainable code architecture.",
      "Ranked among Top 5 performers in cohort for logical problem-solving and code quality.",
    ],
  },
]

export default function Experience() {
  const { ref, controls, variants } = useScrollReveal()

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal-500/5 blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">02 — Experience</span>
            <div className="h-px flex-1 bg-white/5 max-w-[80px]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Where I've <span className="text-gradient">Worked</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/50 via-purple-400/30 to-transparent" />

            <div className="space-y-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.2 + i * 0.15, duration: 0.6 },
                    },
                  }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 top-5 w-4 h-4 rounded-full border-2 ${
                    exp.color === "teal" ? "border-teal-400 bg-teal-400/20" : "border-purple-400 bg-purple-400/20"
                  } -translate-x-1/2 flex items-center justify-center`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${exp.color === "teal" ? "bg-teal-400" : "bg-purple-400"}`} />
                  </div>

                  <div className="card-glass rounded-2xl p-6 hover:border-teal-400/20 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <FiBriefcase className="text-teal-400" size={14} />
                          <span className={`text-sm font-medium ${exp.color === "teal" ? "text-teal-400" : "text-purple-400"}`}>
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full">{exp.duration}</span>
                        <span className="text-xs text-slate-600">{exp.type}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${exp.color === "teal" ? "bg-teal-400" : "bg-purple-400"}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}