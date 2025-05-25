import React from 'react';

const testimonials = [
  {
    name: "John D.",
    text: "Amazing experience! Great cut and super friendly staff.",
    img: "testimonial-1.jpg"
  },
  {
    name: "Emily R.",
    text: "Absolutely love the vibe here. My go-to barber!",
    img: "testimonial-2.jpg"
  },
  {
    name: "Carlos M.",
    text: "Professional, clean, and a perfect cut every time.",
    img: "testimonial-3.jpg"
  }
];

const VijayKumarOrsuTestimonial1 = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
              <img
                src={`/${testimonial.img}`}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border border-gray-300"
              />
              <p className="text-gray-700 italic mb-4">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-yellow-500">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VijayKumarOrsuTestimonial1;
