export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-12 px-10 py-20 items-center">
      <div>
        <h1 className="text-4xl font-bold leading-tight">
          Advance Laser & <br /> Fabrication
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          Forging Excellence In <br /> Metal Fabrication
        </p>

        <h3 className="mt-8 font-semibold">Why ALF?</h3>
        <p className="text-sm text-gray-600 mt-2 max-w-md">
          Advance Laser & Fabrication is a leading manufacturing company
          specializing in precision laser cutting, forming, welding, and
          fabrication solutions.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-6 bg-white rounded-xl p-4 shadow">
          {Array(6)
            .fill("✔ ddfgh")
            .map((item, i) => (
              <span key={i} className="text-sm">
                {item}
              </span>
            ))}
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="/illustration.png"
          alt="illustration"
          className="max-w-sm"
        />
      </div>
    </section>
  )
}
