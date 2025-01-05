import React from "react";
import { motion } from "motion/react"

const AboutMe = () => {
  return (
    <>
       <div className="text-center my-6 bg-gradient-to-b from-black/50 to-black py-4">
        <h1 className="text-orange-600 sm:text-4xl text-2xl font-bold py-8">
          About Me
        </h1>

        <motion.section
         initial={{ opacity: 0, y: 200 }} 
         whileInView={{ opacity: 1, y: 0 }} 
         transition={{ duration: 1}}
        
        className="grid mt-4 sm:grid-cols-2 gap-6 px-4">
          {/* Education Card */}
          <div
            className="p-2 rounded-lg border-l-4 border-orange-600 bg-transparent shadow-[0_4px_10px_rgba(255,255,255,0.6)] hover:shadow-[0_6px_15px_rgba(255,255,255,0.8)] transition-shadow duration-300"
          >
            <h1 className="font-bold text-2xl py-3 pb-5 text-white">
              My Education
            </h1>
            <p className="text-white">
              I have completed my Higher Secondary Certificate (HSC) and
              afterward joined Programming Hero's course to pursue my dream of
              becoming a web developer. Through structured learning and hands-on
              projects, I have gained the skills necessary to build modern web
              applications.
            </p>
          </div>

          {/* Journey to Web Development */}
          <div
            className="p-2 rounded-lg border-l-4 border-orange-600 bg-transparent shadow-[0_4px_10px_rgba(255,255,255,0.6)] hover:shadow-[0_6px_15px_rgba(255,255,255,0.8)] transition-shadow duration-300"
          >
            <h1 className="font-bold text-2xl py-3 text-white">
              Journey to Web Development
            </h1>
            <p className="text-white">
              After completing my HSC, I enrolled in Programming Hero's web
              development course. Through hard work and dedication, I have grown
              into a Junior Frontend Web Developer. I specialize in creating
              responsive and interactive user interfaces using modern
              technologies like React, JavaScript, and CSS. This journey has not
              only built my skills but also fueled my passion for problem-solving
              and continuous learning.
            </p>
          </div>
        </motion.section>

        {/* Button */}
        <button className="text-white mt-7 rounded-tr-2xl rounded-bl-2xl bg-orange-600 sm:text-2xl font-bold py-2 px-6 hover:bg-orange-700 transition-colors duration-300">
          More About Me
        </button>
      </div>
    </>
  );
};

export default AboutMe;
