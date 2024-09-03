import PageHeading from "@/app/_components/PageHeading";
import React from "react";

const Lodging = () => {
  return (
    <>
      <PageHeading
        img="/assets/ladging/hero.jpg"
        title="HOTELS & ACCOMMODATIONS"
      />

      <section className="container my-5 text-xl">
        <h2 className="text-orange-600">
          You won’t be left sleepless in Seattle.
        </h2>
      </section>
    </>
  );
};

export default Lodging;
