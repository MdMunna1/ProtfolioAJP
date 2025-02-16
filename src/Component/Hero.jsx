import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa6";
// import { motion } from "motion/react"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import munna from "../assets/munnare.jpg";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className=" sm:grid sm:h-[500px] sm:grid-cols-2  pt-8 sm:pt-0 gap-5">
        <div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" flex flex-col justify-center mb-6  sm:text-left gap-5
             h-full"
          >
            <h1 className="font-bold pl-4 text-white text-wrap text-4xl">
              Hello, I'm <span className="text-orange-600">Munna</span>
            </h1>
            <p className="font-semibo pl-4 text-white text-wrap text-xl">
              Front-End Web Developer with a passion for creating visually
              stunning, user-friendly, and responsive websites.
            </p>
            <h2 className="pl-4 font-bold text-white">
              LEARN
              <ReactTyped
                className="pl-2 font-bold text-orange-600"
                strings={[
                  " HTML",
                  " CSS",
                  " JAVASCRIPT",
                  " TAILWIND CSS",
                  " REACT JS",
                  " MONGODB",
                  " ANIMATION.",
                  "...",
                ]}
                typeSpeed={100}
                backSpeed={50}
                loop={true}
              />
            </h2>
            <div className="pl-4 flex items-center gap-3">
              <a
                href="https://github.com/MdMunna1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-600 transition duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-600 transition duration-300"
              >
                <FaFacebookSquare size={30} />
              </a>
              <a
                href="https://bd.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-600 transition duration-300"
              >
                <FaLinkedin size={30} />{" "}
              </a>
              <motion.p   whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}>
            <NavLink
              to="https://drive.google.com/file/d/1SA-6PZ_0b8keXaelS7mpUtycjveuQc82/view"
              className={({ isActive }) =>
                isActive
                  ? "font-bold p-2 bg-orange-600 rounded-md text-white"
                  : "font-bold p-2 border border-orange-500 text-white hover:bg-orange-500 rounded-md duration-300"
              }
            >
              Resumi
            </NavLink>
          </motion.p>
            </div>
          </motion.div>
        </div>
        <motion.div  initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }} className="flex   sm:border-l-2 h-full justify-center items-center">
          <img className=" h-[400px] w-[400px] rounded-full object-cover "
            src={munna}
            alt=""
          />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
