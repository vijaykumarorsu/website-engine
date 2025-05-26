import React from "react";

const VijayKumarOrsuFooter = ({ content = {} }) => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {content.title || "Mel's Barber Shop"}. All rights reserved.
        </p>
        {content.description && (
          <p className="text-sm mt-2 text-gray-400">{content.description}</p>
        )}
      </div>
    </footer>
  );
};

export default VijayKumarOrsuFooter;
