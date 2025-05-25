import React from 'react';

const VijayKumarOrsuAbout = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800" id="about">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <img src="/about-image.jpg" alt="About Mel's" className="rounded-xl shadow-xl" />
        <div>
          <h2 className="text-4xl font-bold mb-4">About Mel’s Barber Shop</h2>
          <p className="mb-4">
            Located in Flower Mound, TX, Mel’s has over 15 years of experience in precision cuts and grooming services. Known for on-site services and a 4.8-star customer rating, we blend tradition with modern comfort.
          </p>
          <p className="text-yellow-600 font-semibold">Visit us and redefine your grooming experience.</p>
        </div>
      </div>
    </section>
  );
};

export default VijayKumarOrsuAbout;
