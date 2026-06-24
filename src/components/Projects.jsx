import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useAnimation } from "framer-motion"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import exposeTrendze from "../assets/projects/expose-trendze.png";
import fpsSubtitle from "../assets/projects/fps-subtitle.png";
import githubFinder from "../assets/projects/github-finder.png";
import placementKit from "../assets/projects/placement-kit.png";
import snakeGame from "../assets/projects/snake-game.png";
import taskManager from "../assets/projects/task-manager.png";
import wipo from "../assets/projects/wipo.png";

const projects = [
  {
    id: 1,
    title: "Wipo Group",
    description: "Full client website — designed, coded, and deployed a complete professional business website for Wipo Group LLC.",
    tags: ["React", "Tailwind", "Deployment"],
    color: "teal",
    featured: true,
    live: "https://www.wipogroupinllc.com/",
    image: wipo,
  },
  {
    id: 2,
    title: "Github Profile Finder",
    description: "Enter any GitHub username to instantly explore their profile, repositories, and stats.",
    tags: ["React", "GitHub API", "REST"],
    color: "purple",
    featured: true,
    live: "https://github-profile-finder-flame.vercel.app/",
    image: githubFinder,
  },
  {
    id: 3,
    title: "Snake Game",
    description: "Classic Snake game built with vanilla HTML, CSS, and JavaScript with smooth controls and score tracking.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "teal",
    featured: false,
    live: "https://kjain-code.github.io/Snake-Game/",
    image: snakeGame,
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Interactive React app for task management with real-time UI updates and completed status tracking.",
    tags: ["React", "useState", "CSS"],
    color: "purple",
    featured: true,
    live: "https://to-do-delta-puce.vercel.app/",
    image: taskManager,
  },
  {
    id: 5,
    title: "FPS Subtitle",
    description: "Designed complete website UI and layout including a featured films showcase for a media production entity.",
    tags: ["UI Design", "Web Design", "Media"],
    color: "teal",
    featured: false,
    live: "https://fpssubtitle.com/",
    image: fpsSubtitle,
  },
  {
    id: 6,
    title: "Placement Kit",
    description: "Structured educational content and study flow for student placement preparation on Topperworld.",
    tags: ["Content", "Education", "UX"],
    color: "purple",
    featured: false,
    live: "https://topperworld.in/topperworld-placement-kit/",
    image: placementKit,
  },
  {
    id: 7,
    title: "ExposeTrendze",
    description: "High-conversion product branding carousels designed for social media marketing campaigns.",
    tags: ["Branding", "Design", "Social Media"],
    color: "teal",
    featured: false,
    live: "https://www.instagram.com/trachtenworld/",
    image: exposeTrendze,
  },
]

const CARD_WIDTH = 380
const GAP = 24
const AUTO_INTERVAL = 3500

export default function Projects() {
  const { ref, controls, variants } = useScrollReveal()
  const [filter, setFilter] = useState("all")
  const filtered = filter === "all" ? projects : projects.filter((p) => p.featured)

  // We duplicate the list for infinite loop feel
  const items = [...filtered, ...filtered]

  const trackRef = useRef(null)
  const x = useMotionValue(0)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const currentOffset = useRef(0)
  const autoRef = useRef(null)
  const animFrameRef = useRef(null)
  const isAnimating = useRef(false)

  const STEP = CARD_WIDTH + GAP
  const LOOP_WIDTH = filtered.length * STEP

  // Reset on filter change
  useEffect(() => {
    x.set(0)
    currentOffset.current = 0
  }, [filter])

  // Smooth auto slide using requestAnimationFrame
  useEffect(() => {
    let lastTime = null
    const speed = 0.05 // px per ms

    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp
      const delta = timestamp - lastTime
      lastTime = timestamp

      if (!isDragging.current) {
        currentOffset.current += speed * delta
        if (currentOffset.current >= LOOP_WIDTH) {
          currentOffset.current -= LOOP_WIDTH
        }
        x.set(-currentOffset.current)
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [filter, LOOP_WIDTH])

  const handleMouseDown = (e) => {
    isDragging.current = true
    dragStartX.current = e.clientX
    e.preventDefault()
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current) return
    const diff = dragStartX.current - e.clientX
    x.set(-currentOffset.current - diff)
  }

  const handleMouseUp = (e) => {
    if (!isDragging.current) return
    const diff = dragStartX.current - e.clientX
    currentOffset.current += diff
    if (currentOffset.current < 0) currentOffset.current += LOOP_WIDTH
    if (currentOffset.current >= LOOP_WIDTH) currentOffset.current -= LOOP_WIDTH
    isDragging.current = false
  }

  const handleTouchStart = (e) => {
    isDragging.current = true
    dragStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    if (!isDragging.current) return
    const diff = dragStartX.current - e.touches[0].clientX
    x.set(-currentOffset.current - diff)
  }

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return
    const diff = dragStartX.current - e.changedTouches[0].clientX
    currentOffset.current += diff
    if (currentOffset.current < 0) currentOffset.current += LOOP_WIDTH
    if (currentOffset.current >= LOOP_WIDTH) currentOffset.current -= LOOP_WIDTH
    isDragging.current = false
  }

  const slideBy = (dir) => {
    currentOffset.current += dir * STEP
    if (currentOffset.current < 0) currentOffset.current += LOOP_WIDTH
    if (currentOffset.current >= LOOP_WIDTH) currentOffset.current -= LOOP_WIDTH
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">03 — Projects</span>
            <div className="h-px flex-1 bg-white/5 max-w-[80px]" />
          </div>

          <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Things I've <span className="text-gradient">Built</span>
            </h2>
            <div className="flex gap-2">
              {["all", "featured"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm capitalize transition-all duration-300 ${
                    filter === f
                      ? "bg-teal-400 text-black font-medium"
                      : "border border-white/10 text-slate-400 hover:border-teal-400/30 hover:text-teal-400"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Carousel Track */}
        <div
          className="relative overflow-hidden"
          style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#0a0a0f] to-transparent pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#0a0a0f] to-transparent pointer-events-none" />

          <motion.div
            ref={trackRef}
            style={{ x, display: "flex", gap: GAP, willChange: "transform" }}
          >
            {items.map((project, i) => (
              <div
                key={`${project.id}-${i}`}
                style={{ minWidth: CARD_WIDTH }}
                className="card-glass rounded-2xl overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = "none"
                      e.target.nextSibling.style.display = "flex"
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center text-4xl bg-white/5" style={{ display: "none" }}>
                    ⚡
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-full bg-teal-400/20 border border-teal-400/40 text-teal-400 hover:bg-teal-400 hover:text-black transition-all duration-300"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-full ${
                          project.color === "teal"
                            ? "bg-teal-400/10 text-teal-400/80"
                            : "bg-purple-400/10 text-purple-400/80"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Arrow controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => slideBy(-1)}
            className="p-2 rounded-full border border-white/10 text-slate-400 hover:border-teal-400/40 hover:text-teal-400 transition-all duration-300"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={() => slideBy(1)}
            className="p-2 rounded-full border border-white/10 text-slate-400 hover:border-teal-400/40 hover:text-teal-400 transition-all duration-300"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}