import Image from 'next/image';

const services = [
  { title: "Haircut", desc: "Precision cuts tailored to your style.", img: "service-haircut.jpg" },
  { title: "Beard Trim", desc: "Sharp trims & beard shaping.", img: "service-beard.jpg" },
  { title: "Hot Towel Shave", desc: "Classic clean shave with hot towels.", img: "service-shave.jpg" },
  { title: "Kids Cut", desc: "Stylish cuts for the young gentlemen.", img: "service-kids.jpg" }
];

export default function VijayKumarOrsuServices() {
  return (
    <section id="services" className="py-20 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <img
                src={`/${service.img}`}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
