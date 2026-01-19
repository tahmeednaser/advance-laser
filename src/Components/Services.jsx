export default function Services() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-2xl font-bold">Services and Capabilities</h2>
      <p className="max-w-lg text-sm text-gray-600 mt-2">
        We provide high-quality laser cutting, welding, bending, and fabrication
        services for industrial and commercial applications.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {Array(3).fill(0).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow overflow-hidden"
          >
            <img src="/laser.jpg" alt="service" />
          </div>
        ))}
      </div>
    </section>
  )
}
