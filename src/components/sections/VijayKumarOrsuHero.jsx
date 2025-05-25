export default function VijayKumarOrsuHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-image.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl w-full">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 lg:whitespace-nowrap">
          Timeless Style at Mel's Barber Shop
        </h1>
        <p className="text-md sm:text-lg md:text-xl mb-8 text-gray-200 drop-shadow">
          Premium haircuts & grooming for modern gentlemen.
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-full transition shadow-lg text-lg"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
}
