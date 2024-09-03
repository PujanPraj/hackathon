import React from "react";

interface pageheadingpros {
  title: string;
  img: string;
}

const PageHeading = ({ title, img }: pageheadingpros) => {
  return (
    <div className="relative">
      {/* Image with an overlay */}
      <img src={img} alt={title} className="w-full h-96 object-cover" />
      {/* Orange overlay */}
      <div className="absolute inset-0 bg-orange-400 opacity-50" />
      {/* Title centered on the image */}
      <h1 className="text-shadow absolute inset-0 flex items-center justify-center text-4xl md:text-8xl text-white font-bold z-10">
        {title}
      </h1>
    </div>
  );
};

export default PageHeading;
