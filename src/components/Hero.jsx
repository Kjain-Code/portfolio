import { motion } from "framer-motion"
import { useTypewriter } from "../hooks/useTypewriter"
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from "react-icons/fi"
import { Link } from "react-scroll"
import { Canvas } from "@react-three/fiber"
import { Stars, Float } from "@react-three/drei"

function FloatingOrb({ position, color, scale = 1 }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "MERN Stack Engineer",
  "Creative Coder",
  "Software Developer",
]

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/kjain-code", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/kritika-jain-dev/", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:kritikajain@email.com", label: "Email" },
]

export default function Hero() {
  const displayText = useTypewriter(roles, 80, 2200)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#2dd4bf" intensity={2} />
          <pointLight position={[-10, -10, -10]} color="#a78bfa" intensity={1.5} />
          <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={1.5} />
          <FloatingOrb position={[-4, 2, -3]} color="#2dd4bf" scale={2} />
          <FloatingOrb position={[5, -2, -4]} color="#a78bfa" scale={1.5} />
          <FloatingOrb position={[2, 3, -5]} color="#2dd4bf" scale={1} />
        </Canvas>
      </div>

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[#0a0a0f]/20 to-[#0a0a0f]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-[120px] z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-400/20 bg-teal-400/5 text-teal-400 text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Kritika Jain</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-2xl md:text-3xl font-light text-slate-300 mb-6 h-10"
        >
          <span className="text-teal-400 font-medium">{displayText}</span>
          <span className="animate-pulse text-teal-400">|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Crafting scalable web solutions and engaging digital experiences with modern tech stacks.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link to="projects" smooth duration={600} offset={-70}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(45,212,191,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-teal-400 text-black font-semibold hover:bg-teal-300 transition-all duration-300"
            >
              View My Work <FiArrowRight />
            </motion.button>
          </Link>

          <motion.a
            href="/KRITIKA JAIN RESUME.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:border-teal-400/40 hover:bg-teal-400/10 transition-all duration-300 backdrop-blur-sm"
          >
            <FiDownload /> Download CV
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-teal-400 hover:border-teal-400/40 transition-all duration-300 backdrop-blur-sm"
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs"
      >
        <span>Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-teal-400 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}