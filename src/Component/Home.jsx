import React from "react";
import Navber from "./Navber";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Hero from "./Hero";
import AboutMe from "./Aboutme";
import SkillSection from "./Skill";
import ProjectSection from "./Projectsection";
import ContactMe from "./ContactMe";

const Home = () => {
  const projects = [
    {
      id: 1,
      name: "GadgetHeaven",
      description:
        "A responsive e-commerce platform for gadgets, with cart, wishlist, and product filtering features.",
      image: "geget.png",
      technologies: ["React", "Tailwind", "MongoDB"],
      liveLink: "https://stellular-cucurucho-07b3e6.netlify.app/",
      repoLink: "https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-MdMunna1?tab=readme-ov-file",
    },
    {
      id: 2,
      name: "Lingo Bingo",
      description:
        "A fun Hindi vocabulary learning platform featuring interactive cards and quizzes.",
      image: "lingo.png",
      technologies: ["React", "Tailwind", "Context API"],
      liveLink: "https://lingo-bingo-bymunna.netlify.app/",
      repoLink:
        "https://github.com/programming-hero-web-course1/b10-a9-authentication-MdMunna1",
    },
    {
      id: 3,
      name: "Hotel Booking",
      description:
        "A hotel booking platform with dynamic filtering, detailed room information, and a secure booking system.",
      image: "hotel.png",
      technologies: ["React", "Express.js", "MongoDB","tailwind"],
      liveLink: "https://assingment-11-9c848.web.app/",
      repoLink:
        "https://github.com/programming-hero-web-course2/b10a11-client-side-MdMunna1",
    },
    {
      id: 4,
      name: "Visa Processing System",
      description:
        "A web application for managing visa applications, including application tracking, user authentication, and admin management.",
      image: "visa.png",
      technologies: ["React", "Context API", "MongoDB","tailwind"],
      liveLink: "https://assimgment-10.web.app/",
      repoLink: "https://github.com/programming-hero-web-course2/b10-a10-client-side-MdMunna1",
    },
  ];
  
  
  return (
    <>
    <div className="w-11/12 mx-auto">

    <Hero />
    <AboutMe />
    <SkillSection />
    <ProjectSection projects={projects} />
   <ContactMe />
    </div>
     
    </>
  );
};

export default Home;
