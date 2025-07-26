"use client";
import React, { useState } from "react";
import Animate from "./Animate";
import Stack from "./Stack";
import Image from "next/image";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  image: string;
  link?: string;
}

const MyProjects = () => {
  const projects: Project[] = [
    {
      title: "Furnisheet E-commerce Website",
      subtitle: "Clone of Furnisheet",
      description:
        "Furniture rental platform with modern design and responsive user experience.",
      stack: ["react", "typescript", "tailwind", "css", "next"],
      image: "/assets/images/furnisheet.png",
      link: "https://furnisheet-nextjs-9xbf.vercel.app/",
    },
    {
      title: "Space Tourism Website",
      subtitle: "Frontend Mentor Challenge",
      description:
        "Space exploration site with smooth navigation, visuals, and mobile responsiveness.",
      stack: ["react", "js", "tailwind", "css"],
      image: "/assets/images/space.png",
      link: "https://firebase-app-y84x.vercel.app/",
    },

    {
      title: "Product List with Cart",
      subtitle: "Frontend Mentor Challenge",
      description:
        "Simple cart interface with product selection and quantity adjustment feature.",
      stack: ["html", "js", "tailwind", "css"],
      image: "/assets/images/product-list.png",
      link: "https://chizuru-product-list.vercel.app/",
    },
    {
      title: "Basic Calculator",
      subtitle: "Personal Project",
      description:
        "Performs basic arithmetic operations with clean layout and minimal UI.",
      stack: ["html", "js", "tailwind", "css"],
      image: "/assets/images/calculator.png",
      link: "https://simple-calculator-gbgi.vercel.app/",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  return (
    <div
      className=" flex flex-col w-full max-w-[45rem] px-10 my-10 semiformal"
      id="projects"
    >
      <h1 className="text-center mb-5">My Projects</h1>
      {/* project list */}
      <div className="flex flex-col gap-5 my-5 semiformal shadow-xl ">
        {visibleProjects.map((project, index) => (
          <Animate type="pop-x" key={index}>
            <div
              className={`project-item flex md:h-[15rem] md:overflow-y-hidden  md:flex-row gap-6 w-full flex-col-reverse ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="description w-full  md:w-1/2 md:h-full p-5">
                <h2>{project.title}</h2>
                <h3>{project.subtitle}</h3>
                <p className="project-p">{project.description}</p>
                <span className="project-span">Built with:</span>
                <Stack stack={project.stack} />
              </div>

              <div className="img h-[15rem] w-full  md:w-1/2 md:h-full relative overflow-hidden group">
                <a href={project.link} target="_blank">
                  <Image
                    width={500}
                    height={300}
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 z-10 group-hover:text-white text-transparent flex group-hover:fill-white fill-transparent items-center gap-2 transition-colors duration-500 ease-in-out">
                    <span className="text-md">Visit site</span>
                    <span>
                      {/* SVG remains the same */}
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 122.6 122.88"
                        className="size-4 fill-inherit"
                      >
                        <g>
                          <path
                            d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 
                    c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 
                    C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 
                    c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63
                    h87.95c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6
                    c-2.23,2.27-5.89,2.3-8.16,0.07c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78
                    c0-3.19,2.59-5.78,5.78-5.78h26.5c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93
                    c0,3.19-2.59,5.78-5.78,5.78c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24
                    C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </Animate>
        ))}
      </div>

      <Animate type="pop-y">
        <div
          className=" project-btn  semiformal m-auto "
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "View All Projects"}
        </div>
      </Animate>
    </div>
  );
};

export default MyProjects;
