import Card from "@/app/_components/home/card/Card";
import MyCarousel from "@/app/_components/home/carousel/Carousel";
import Heading from "@/app/_components/home/heading/Heading";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

import React from "react";
import Destination from "@/app/_components/home/destination/Destination";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-[50vh]">
        <img
          src="/assets/carousel/caro1.png"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-center text-3xl mb-4">Lorem30</h1>
          <Button className="bg-orange-300 text-white">Click me</Button>
        </div>
      </div>

      {/* Our facilities */}
      <section className="container py-5 mt-5">
        <Heading title="Our Facilities" />

        {/* card section */}
        <div className="py-5 columns-1 space-y-8 md:columns-3 mt-7">
          <Card
            icon={<FaBus />}
            title="Comfortable Bus Service"
            para="Our fleet of modern buses is equipped with state-of-the-art amenities designed to ensure a smooth and enjoyable journey. Our expertly trained drivers will take care of you every step of the way, ensuring a safe and punctual arrival at your destination."
          />
          <Card
            title="Comfortable Seats"
            icon={<MdOutlineAirlineSeatReclineExtra />}
            para="Our seats are designed with your comfort in mind. With ample legroom, reclining capabilities, and adjustable headrests, you'll be able to stretch out and relax in style. Whether you're traveling solo or with friends, our seats offer the perfect blend of comfort and space."
          />
          <Card
            title="Cheap Prices"
            icon={<MdDiscount />}
            para="We understand that traveling can be expensive, which is why we're committed to providing affordable fares without compromising on quality. Our prices are designed to fit any budget, so you can enjoy your trip without breaking the bank."
          />
        </div>
      </section>

      {/*Our destination  */}
      <section className="container py-5">
        <Heading title="Our Destination" />

        {/* card section */}
        <div className="py-5 columns-1 md:columns-3 mt-7 space-y-4">
          <Destination
            href="/bhaktapur"
            img="/assets/destination/bhaktapur.jpg"
            para="Bhaktapur"
          />

          <Destination
            href="/kathmandu"
            img="/assets/destination/kathmandu.webp"
            para="Kathmandu"
          />
          <Destination
            href="/pokhara"
            img="/assets/destination/pokhara.webp"
            para="Pokhara"
          />
          <Destination
            href="/lalitpur"
            img="/assets/destination/lalitput.webp"
            para="Lalitpur"
          />
          <Destination
            href="/lumbini"
            img="/assets/destination/lumbini.jpg"
            para="Lumbini"
          />
          <Destination
            href="/chitwan"
            img="/assets/destination/chitwan.jpg"
            para="Chitwan"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
