import React from "react";

const images = ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg"];

const VijayKumarOrsuGallery1 = () => {
  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Gallery</h2>
        <p className="text-gray-600">A glimpse of our shop and happy customers.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow hover:scale-105 transition">
            <img
              src={`/${img}`}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VijayKumarOrsuGallery1;
