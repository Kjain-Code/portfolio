import { motion } from "framer-motion"
import { useScrollReveal } from "../hooks/useScrollReveal"

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Happy Clients" },
  { value: "∞", label: "Lines of Code" },
]

export default function About() {
  const { ref, controls, variants } = useScrollReveal()

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">01 — About</span>
            <div className="h-px flex-1 bg-white/5 max-w-[80px]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Who I <span className="text-gradient">Am</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                I'm <span className="text-white font-medium">Kritika Jain</span>, a passionate Full Stack Developer based in India, focused on building clean, performant, and user-friendly digital products.
              </p>
              <p>
                My expertise spans the entire web stack — from crafting pixel-perfect React UIs to architecting robust Node.js backends. I thrive at the intersection of design and engineering.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or refining my problem-solving skills through competitive programming.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["React.js", "Node.js", "MongoDB", "Express", "Tailwind", "Three.js"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-sm border border-teal-400/20 bg-teal-400/5 text-teal-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { delay: 0.2 + i * 0.1, duration: 0.5 },
                    },
                  }}
                  className="card-glass rounded-2xl p-6 text-center hover:border-teal-400/30 transition-all duration-300 group"
                >
                  <div className="text-4xl font-bold text-gradient mb-1">{value}</div>
                  <div className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}