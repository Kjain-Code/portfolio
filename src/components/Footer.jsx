export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 text-center">
      <p className="text-slate-600 text-sm">
        Designed & Built by{" "}
        <span className="text-teal-400 font-medium">Kritika Jain</span>
        {" "} · {new Date().getFullYear()}
      </p>
    </footer>
  )
}