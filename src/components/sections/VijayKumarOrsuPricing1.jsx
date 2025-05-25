import React from 'react';

const VijayKumarOrsuPricing1 = () => {
  return (
    <section className="py-16 bg-[url('/pricing-bg.jpg')] bg-cover bg-center text-white" id="pricing">
      <div className="bg-black/60 p-10 rounded-xl max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Our Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Haircut', price: '$25' },
            { title: 'Beard Trim', price: '$15' },
            { title: 'Shave & Style', price: '$35' },
          ].map((item, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg text-center hover:bg-yellow-500 hover:text-black transition">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-2xl">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VijayKumarOrsuPricing1;
