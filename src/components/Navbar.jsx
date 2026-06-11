import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-scroll"

const navLinks = ["Home", "About", "Experience", "Projects", "Skills", "Contact"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-gradient cursor-pointer"
        >
          
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-70}
                className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200 cursor-pointer relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-teal-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.a
          href="mailto:kritika098jain@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-400 text-sm font-medium hover:bg-teal-400 hover:text-black transition-all duration-300"
        >
          Hire Me
        </motion.a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f0f1a] border-t border-white/5 px-6 py-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth
                duration={600}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-slate-300 hover:text-teal-400 transition-colors cursor-pointer border-b border-white/5"
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}