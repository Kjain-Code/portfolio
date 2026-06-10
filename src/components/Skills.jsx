import { motion } from "framer-motion"
import { useState } from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { skills } from "../data/skills"

const categories = ["frontend", "backend", "tools"]

export default function Skills() {
  const { ref, controls, variants } = useScrollReveal()
  const [active, setActive] = useState("frontend")

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-teal-500/5 blur-[120px]" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">04 — Skills</span>
            <div className="h-px flex-1 bg-white/5 max-w-[80px]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            My <span className="text-gradient">Toolkit</span>
          </h2>

          {/* Tab buttons */}
          <div className="flex gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full capitalize text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-teal-400 text-black"
                    : "border border-white/10 text-slate-400 hover:border-teal-400/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill bars */}
          <div className="space-y-5">
            {skills[active].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-300 flex items-center gap-2">
                    <span>{skill.icon}</span> {skill.name}
                  </span>
                  <span className="text-xs text-teal-400 font-medium">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-teal-400 to-purple-400"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}