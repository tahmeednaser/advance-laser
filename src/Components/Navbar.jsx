export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <div className="flex items-center gap-2 font-bold">
        <span className="text-xl">⚙️</span>
        <span>Advance Laser</span>
      </div>

      <ul className="hidden md:flex gap-8 text-sm">
        <li>Services & Capabilities</li>
        <li>Materials</li>
        <li>How It Works</li>
        <li>Resources</li>
        <li>Company</li>
      </ul>

      <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">
        Contact Us
      </button>
    </nav>
  )
}
