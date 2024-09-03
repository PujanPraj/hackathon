import Navbar from "@/app/_components/Navbar";
import MyCarousel from "@/app/_components/home/carousel/Carousel";
import Heading from "@/app/_components/home/heading/Heading";
import React from "react";

const Home = () => {
  return (
    <>
      <MyCarousel />

      <section className="container py-7">
        <Heading title="Our Facilities" />
      </section>
    </>
  );
};

export default Home;
