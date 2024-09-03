import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="container py-4">
      <nav className="flex justify-between items-center">
        <a href={"/"}>
          <img src="/assets/logo/logo.png" className="w-32 h-14" alt="" />
        </a>

        <div className="flex space-x-3">
          <Link href={"/"} className="text-lg">
            Home
          </Link>
          <Link href={"/about"} className="text-lg">
            About
          </Link>
          <Link href={"/service"} className="text-lg">
            Services
          </Link>
        </div>

        <div className="flex space-x-5">
          <Link href={"/contact"}>
            <Button>Contact Us</Button>
          </Link>
          <Link href={"/signin"}>
            <Button>Sign in</Button>
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
