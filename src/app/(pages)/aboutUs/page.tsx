import React from "react";

const page = () => {
  return (
    <>
      <section className="container flex flex-col lg:flex-row gap-10 py-[50px]">
        <div className="left lg:w-1/2 w-full">
          <img
            src="aboutus/cortina-dampezzo-8504755_1280.jpg"
            alt=""
            className="w-full"
          />
          <h1 className="text-[40px] mt-20 font-medium">Who we are:</h1>
          <p className="text-xl">
            Founded in 2024, Trishul was born from a love for exploration and a deep desire to share the beauty of the world with others. We are a team of seasoned travelers, cultural enthusiasts, and local experts who are committed to crafting unique journeys tailored to your interests and desires.
          </p>
        </div>
        <div className="right lg:w-1/2 w-full">
          <h1 className="text-[50px] mb-10 mt-10 font-bold">About us</h1>
          <p className="text-xl mb-20">
            Welcome to Trishul, your gateway to unforgettable travel experiences! At Trishul, we believe that travel is more than just visiting new places—it's about creating memories, discovering cultures, and connecting with the world in meaningful ways. Our passion for travel drives us to offer you the most authentic, enriching, and immersive experiences possible.
          </p>
          <img src="aboutus/italy-1265078_1280.jpg" alt="img" className="w-full" />
        </div>
      </section>
    </>
  );
};

export default page;
