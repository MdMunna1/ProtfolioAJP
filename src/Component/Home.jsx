import React from "react";
import Navber from "./Navber";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Hero from "./Hero";
import AboutMe from "./Aboutme";
import SkillSection from "./Skill";

const Home = () => {
  return (
    <>
    <div className="w-11/12 mx-auto">

    <Hero />
    <AboutMe />
    <SkillSection />
    </div>
     
    </>
  );
};

export default Home;
