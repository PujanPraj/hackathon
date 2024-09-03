import Link from "next/link";
import Image from "next/image";
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
      className="relative flex flex-col items-center cursor-pointer"
    >
      <div className="relative w-full h-48">
        <Image
          src={img}
          alt={para}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <div className="absolute bottom-0 bg-red-300 w-full text-center p-2">
        <p className="text-white">{para}</p>
      </div>
    </Link>
  );
};

export default Destination;
