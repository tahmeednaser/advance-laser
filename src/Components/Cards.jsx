export default function Cards() {
  return (
    <section className="px-10 py-20 text-center">
      <h2 className="text-2xl font-bold mb-10">Need Our Services?</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {["Materials", "Company", "Resources"].map((title) => (
          <div
            key={title}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >
            <img src="/laser.jpg" alt={title} className="rounded-lg" />
            <div className="flex justify-between items-center mt-4">
              <span className="font-semibold">{title}</span>
              <span className="text-gray-400">➜</span>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-red-500 text-white px-6 py-3 rounded-full">
        Contact Us
      </button>
    </section>
  )
}
