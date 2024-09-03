import Heading from "@/app/_components/home/heading/Heading";
import PageHeading from "@/app/_components/PageHeading";
import React from "react";

const Lodging = () => {
  return (
    <>
      <PageHeading
        img="/assets/ladging/hero.jpg"
        title="HOTELS & ACCOMMODATIONS"
      />

      <section className="container my-5 text-xl mb-16">
        <h2 className="text-orange-600">
          You won’t be left sleepless in Seattle.
        </h2>

        <p className="text-sm my-3">
          Traveling with kids and dog in tow? Planning a weekend with friends?
          How about a romantic getaway? Whatever you want for your stay, you can
          find it at Seattle’s wide variety of hotels. The city’s diverse
          lodging options range from historic and elegant accommodations in the
          heart of the city to on-trend hotels with urban art and sleek designs.
          Many Seattle hotels feature fantastic on-site restaurants and bars,
          while others are steps from famous sights like the calm waters of
          Elliott Bay and the iconic Space Needle.
          <br />
          <br />
          If you would like personalized suggestions for hotels, you may tweet,
          email, or call our friendly Seattle concierges at 206-461-5840 (toll
          free 866-732-2695). We’ll steer you in the right direction!
        </p>
      </section>

      <Heading title="Lodges" />

      <section className="container columns-1 md:columns-3 space-y-5 py-5 my-5">
        <div className="flex flex-col justify-center space-y-1">
          <img
            src="/assets/ladging/1.jpg"
            className="w-full h-80 object-cover"
            alt="1"
          />
          <h2>Pokhara Luxury Hotel</h2>
          <p>Address : Pokhara</p>
          <p>Phone : +977 1 234 567</p>
        </div>
        <div className="flex flex-col justify-center space-y-1">
          <img
            src="/assets/ladging/2.jpg"
            className="w-full h-80 object-cover"
            alt="1"
          />
          <h2>Bhaktapur Luxury Hotel</h2>
          <p>Address : Bhaktapur</p>
          <p>Phone : +977 1 234 567</p>
        </div>
        <div className="flex flex-col justify-center space-y-1">
          <img
            src="/assets/ladging/3.jpg"
            className="w-full h-80 object-cover"
            alt="1"
          />
          <h2>Lumbini Luxury Hotel</h2>
          <p>Address : Lumbini</p>
          <p>Phone : +977 1 234 567</p>
        </div>
        <div className="flex flex-col justify-center space-y-1">
          <img
            src="/assets/ladging/4.jpg"
            className="w-full h-80 object-cover"
            alt="1"
          />
          <h2>Lalitpur Luxury Hotel</h2>
          <p>Address : Lalitpur</p>
          <p>Phone : +977 1 234 567</p>
        </div>
        <div className="flex flex-col justify-center space-y-1">
          <img
            src="/assets/ladging/1.jpg"
            className="w-full h-80 object-cover"
            alt="1"
          />
          <h2>Chitwan Luxury Hotel</h2>
          <p>Address : Pokhara</p>
          <p>Phone : +977 1 234 567</p>
        </div>
        <div className="flex flex-col justify-center space-y-1">
          <img
            src="/assets/ladging/1.jpg"
            className="w-full h-80 object-cover"
            alt="1"
          />
          <h2>Pokhara Luxury Hotel</h2>
          <p>Address : Pokhara</p>
          <p>Phone : +977 1 234 567</p>
        </div>
      </section>
    </>
  );
};

export default Lodging;
