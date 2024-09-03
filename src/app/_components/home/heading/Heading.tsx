import React from "react";

interface headingprops {
  title: string;
}

const Heading = ({ title }: headingprops) => {
  return <h1 className="text-4xl text-center">{title}</h1>;
};

export default Heading;
