"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky p-4 top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="container flex justify-between items-center">
        <a href={"/"}>
          <img
            src="/assets/logo/logo.png"
            className="hidden md:block w-32 h-14"
            alt=""
          />
          <img
            src="/assets/logo/logo.png"
            className="md:hidden w-24 h-10"
            alt=""
          />
        </a>

        <div className="hidden md:flex space-x-5">
          <Link
            href="/"
            className={`text-lg hover:text-orange-500 transition-colors duration-200 ${
              pathname === "/" ? "text-orange-500 font-bold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-lg hover:text-orange-500 transition-colors duration-200 ${
              pathname === "/about" ? "text-orange-500 font-bold" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/thingstodo"
            className={`text-lg hover:text-orange-500 transition-colors duration-200 ${
              pathname === "/service" ? "text-orange-500 font-bold" : ""
            }`}
          >
            Things to do
          </Link>
          <Link
            href="/lodging"
            className={`text-lg hover:text-orange-500 transition-colors duration-200 ${
              pathname === "/service" ? "text-orange-500 font-bold" : ""
            }`}
          >
            Lodging
          </Link>
        </div>

        <div className="hidden md:flex space-x-5">
          <Link href={"/contact"}>
            <Button className="bg-orange-500 hover:bg-orange-400">
              Contact Us
            </Button>
          </Link>
          <Link href={"/signin"}>
            <Button className="bg-orange-500 hover:bg-orange-400">
              Sign in
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger>
              <FaBars className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <Link href={"/"}>
                  <SheetTitle>Home</SheetTitle>
                </Link>
                <Link href={"/about"}>
                  <SheetTitle>About</SheetTitle>
                </Link>
                <Link href={"/services"}>
                  <SheetTitle>Services</SheetTitle>
                </Link>

                <br />

                <Link href={"/contact"}>
                  <Button>Contact Us</Button>
                </Link>
                <Link href={"/signin"}>
                  <Button>Sign in</Button>
                </Link>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
