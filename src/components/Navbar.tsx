"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <section className="casual text-white text-sm select-none  ">
      <div
        className="navbar bg-[#222222]/70 
        backdrop-blur-md 
        border-b 
        border-faded/20 
        
        shadow-lg  w-full flex justify-between md:justify-center  items-center py-5 px-10 relative "
      >
        <div className="logo w-1/3 md:w-1/2 text-lg font-bold text-accent">
          &lt;chizuru_jethro&gt;
        </div>
        <div className=" items-center gap-5 semiformal hidden md:flex text-nowrap">
          <span className="nav-link">
            <a href="#home">Home</a>
          </span>
          <span className="nav-link">
            <a href="#about">About Me</a>
          </span>
          <span className="nav-link">
            <a href="#projects">Projects</a>
          </span>
          <span className="nav-link">
            <a href="#contact">Hire Me</a>
          </span>
        </div>
        <nav
          className={`nav flex justify-between items-center  md:w-1/2 lg:w-1/3 md:static absolute bg-tertiary/70 
        backdrop-blur-md 
        border 
        !border-faded/20 semiformal
       
        
        shadow-lg md:!hidden flex-col top-20 right-5 w-64 ${
          menuOpen ? "show" : ""
        } `}
        >
          <a href="#home" className="nav-link">
            <span onClick={() => setMenuOpen(false)}>Home</span>
          </a>
          <a href="#about" className="nav-link">
            <span onClick={() => setMenuOpen(false)}>About Me</span>
          </a>
          <a href="#projects" className="nav-link">
            <span onClick={() => setMenuOpen(false)}>Projects</span>
          </a>
          <a href="#contact" className="nav-link">
            <span onClick={() => setMenuOpen(false)}>Hire Me</span>
          </a>
        </nav>
        <div className="menu" onClick={() => setMenuOpen((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className="size-8 fill-faded hover:fill-white cursor-pointer md:hidden block"
          >
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
