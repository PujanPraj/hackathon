import React from "react";

interface destinationprops {
  para: string;
  img: string;
}

const Destination = ({ para, img }: destinationprops) => {
  return (
    <section className="container py-7">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
        <img src={img} className="w-[50%]" alt="cultural image" />
        <p className="text-justify">{para}</p>
      </div>
    </section>
  );
};

export default Destination;
