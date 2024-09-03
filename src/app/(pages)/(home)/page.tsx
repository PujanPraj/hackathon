import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="container">
        <nav className="flex justify-between items-center">
          <a href={"/"}>LOGO.</a>

          <div className="flex space-x-3">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Home;
