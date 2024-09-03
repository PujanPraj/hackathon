import Card from "@/app/_components/home/card/Card";
import MyCarousel from "@/app/_components/home/carousel/Carousel";
import Heading from "@/app/_components/home/heading/Heading";
import { FaPlane } from "react-icons/fa6";

import React from "react";
import Link from "next/link";
import Destination from "@/app/_components/home/destination/Destination";

const Home = () => {
  return (
    <>
      <MyCarousel />

      {/* Our facilities */}
      <section className="container py-5">
        <Heading title="Our Facilities" />

        {/* card section */}
        <div className="py-5 columns-3 mt-7">
          <Card
            icon={<FaPlane />}
            para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore cupiditate aperiam quo, qui repellendus ipsa iste architecto pariatur veniam."
          />
          <Card
            icon={<FaPlane />}
            para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore cupiditate aperiam quo, qui repellendus ipsa iste architecto pariatur veniam."
          />
          <Card
            icon={<FaPlane />}
            para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore cupiditate aperiam quo, qui repellendus ipsa iste architecto pariatur veniam."
          />
        </div>
      </section>

      {/*Our destination  */}
      <section className="container py-5">
        <Heading title="Our Destination" />

        {/* card section */}
        <div className="py-5 columns-3 mt-7 space-y-4">
          <Destination
            href="/bhaktapur"
            img="/assets/destination/bhaktapur.jpg"
            para="Bhaktapur"
          />

          <Destination
            href="/bhaktapur"
            img="/assets/destination/bhaktapur.jpg"
            para="Bhaktapur"
          />
          <Destination
            href="/bhaktapur"
            img="/assets/destination/bhaktapur.jpg"
            para="Bhaktapur"
          />
          <Destination
            href="/bhaktapur"
            img="/assets/destination/bhaktapur.jpg"
            para="Bhaktapur"
          />
          <Destination
            href="/bhaktapur"
            img="/assets/destination/bhaktapur.jpg"
            para="Bhaktapur"
          />
          <Destination
            href="/bhaktapur"
            img="/assets/destination/bhaktapur.jpg"
            para="Bhaktapur"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
