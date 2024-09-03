import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="container py-4">
      <nav className="flex justify-between items-center">
        <a href={"/"}>LOGO.</a>

        <div className="flex space-x-3">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Services</Link>
        </div>

        <div className="flex space-x-5">
          <Button>Contact Us</Button>
          <Button>Sign in</Button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
