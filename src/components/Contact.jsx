import { useState } from "react"
import { motion } from "framer-motion"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi"

export default function Contact() {
  const { ref, controls, variants } = useScrollReveal()
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px]" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">05 — Contact</span>
            <div className="h-px flex-1 bg-white/5 max-w-[80px]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>

          <p className="text-slate-400 mb-12 max-w-md">
            Open to full-time roles, freelance projects, and collaborations. Let's build something great together.
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-teal-400/10 text-teal-400">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Email</p>
                  <a href="mailto:kritika098jain@gmail.com" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">
                    kritika098jain@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-400/10 text-purple-400">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                  <a href="tel:+917505802687" className="text-slate-300 hover:text-teal-400 transition-colors text-sm">
                    +91 7505802687
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-teal-400/10 text-teal-400">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Location</p>
                  <span className="text-slate-300 text-sm">Noida, India · Remote Available</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a href="https://github.com/kjain-code" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-white/10 text-slate-400 hover:text-teal-400 hover:border-teal-400/30 transition-all" aria-label="GitHub">
                  <FiGithub size={18} />
                </a>
                <a href="https://www.linkedin.com/in/kritika-jain-dev/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-white/10 text-slate-400 hover:text-teal-400 hover:border-teal-400/30 transition-all" aria-label="LinkedIn">
                  <FiLinkedin size={18} />
                </a>
              </div>

            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-400/50 transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-400/50 transition-colors text-sm"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-teal-400/50 transition-colors text-sm resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl bg-teal-400 text-black font-semibold flex items-center justify-center gap-2 hover:bg-teal-300 transition-colors"
              >
                {sent ? "Message Sent! 🎉" : <><FiSend /> Send Message</>}
              </motion.button>
            </form>

          </div>
        </motion.div>
      </div>
    </section>
  )
}