import Link from "next/link";
import React from "react";

interface DestinationProps {
  img: string;
  para: string;
  href: string; // Add href to the props
}

const Destination = ({ img, para, href }: DestinationProps) => {
  return (
    <Link
      href={href}
      passHref
      className="relative flex flex-col items-center cursor-pointer overflow-hidden group"
    >
      <div className="relative w-full h-60">
      <div className="relative w-full h-48 overflow-hidden transition-all duration-300 group-hover:scale-125 group-hover:opacity-80">
        <img
          src={img}
          alt={para}
          className="rounded object-cover transition-transform duration-300"
        />
      </div>
      <div className="absolute bottom-0 w-full h-10 bg-opacity-70 bg-orange-300 text-center p-2 transition-all duration-300 group-hover:h-full flex items-center justify-center">
        <p className="text-white text-shadow">{para}</p>
      </div>
      </div>
    </Link>
  );
};

export default Destination;
