import PageHeading from "@/app/_components/PageHeading";
import { Button } from "@/components/ui/button";
import React from "react";

const Booknow = () => {
  return (
    <>
      <PageHeading img="/assets/carousel/carp3.webp" title="Book Now" />

      <section className="container columns-1 md:columns-2 space-y-5 py-5 my-5">
        <div className="flex flex-wrap gap-5 items-center border">
          <img
            src="/assets/destination/bhaktapur.jpg"
            className="w-full md:w-96 h-64"
            alt="bhaktapur"
          />
          <div className="space-y-3 p-4">
            <h1 className="text-3xl font-bold">Bhaktapur</h1>
            <h2 className="text-lg">Price : $1000</h2>
            <Button className="bg-orange-500 hover:bg-orange-400 text-white">
              Book Now
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 items-center border">
          <img
            src="/assets/destination/pokhara.webp"
            className="w-full md:w-96 h-64"
            alt="pokhara"
          />
          <div className="space-y-3 p-4">
            <h1 className="text-3xl font-bold">Pokhara</h1>
            <h2 className="text-lg">Price : $1000</h2>
            <Button className="bg-orange-500 hover:bg-orange-400 text-white">
              Book Now
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 items-center border">
          <img
            src="/assets/destination/chitwan.jpg"
            className="w-full md:w-96 h-64"
            alt="bhaktapur"
          />
          <div className="space-y-3 p-4">
            <h1 className="text-3xl font-bold">Chitwan</h1>
            <h2 className="text-lg">Price : $1000</h2>
            <Button className="bg-orange-500 hover:bg-orange-400 text-white">
              Book Now
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 items-center border">
          <img
            src="/assets/destination/lumbini.jpg"
            className="w-full md:w-96 h-64"
            alt="lumbini"
          />
          <div className="space-y-3 p-4">
            <h1 className="text-3xl font-bold">Lumbini</h1>
            <h2 className="text-lg">Price : $1000</h2>
            <Button className="bg-orange-500 hover:bg-orange-400 text-white">
              Book Now
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 items-center border">
          <img
            src="/assets/destination/kathmandu.webp"
            className="w-full md:w-96 h-64"
            alt="kathmandu"
          />
          <div className="space-y-3 p-4">
            <h1 className="text-3xl font-bold">Kathmandu</h1>
            <h2 className="text-lg">Price : $1000</h2>
            <Button className="bg-orange-500 hover:bg-orange-400 text-white">
              Book Now
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 items-center border">
          <img
            src="/assets/destination/lalitput.webp"
            className="w-full md:w-96 h-64"
            alt="Lalitpur"
          />
          <div className="space-y-3 p-4">
            <h1 className="text-3xl font-bold">Lalitpur</h1>
            <h2 className="text-lg">Price : $1000</h2>
            <Button className="bg-orange-500 hover:bg-orange-400 text-white">
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booknow;
