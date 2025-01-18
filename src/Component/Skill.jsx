import React from "react";
import { motion } from "motion/react"

const skills = [
  {
    name: "HTML",
    img: "html.webp",
    description: "HTML is the foundation of web development, used to structure web pages. You know how to use semantic tags like <header>, <footer>, <article>, and <section> for better accessibility and SEO.",
    percentage: 80,
  },
  {
    name: "CSS",
    img: "css.png",
    description: "CSS is used to style web pages, including layout, colors, fonts, and responsiveness. You’re familiar with both traditional CSS and utility-first frameworks like Tailwind CSS for efficient design.",
    percentage: 80,
  },
  {
    name: "JavaScript",
    img: "js.png",
    description: "JavaScript is the backbone of interactivity on websites. You’re adept at using it to add dynamic behavior, handle events, and manipulate the DOM.",
    percentage: 70,
  },
  {
    name: "React",
    img: "react.png",
    description: "React is a powerful library for building user interfaces. You’re experienced with component-based architecture, state management, and routing within React.",
    percentage: 80,
  },
  {
    name: "Tailwind CSS",
    img: "download.jpeg",
    description: "Tailwind CSS is a utility-first framework that speeds up UI development. You use Tailwind for responsive layouts, typography, and more, writing minimal custom CSS.",
    percentage: 80,
  },
  {
    name: "MongoDB",
    img: "images.png",
    description: "MongoDB is a NoSQL database, used for flexible, schema-less data storage. You’re familiar with its basic operations and integrating it with backend applications.",
    percentage: 60,
  },
  {
    name: "Express.js",
    img: "ex.webp",
    description: "Express.js is a minimal and flexible Node.js web application framework. You use it to build APIs, handle middleware, and manage backend routing efficiently.",
    percentage: 40,
  },
  {
    name: "Next.js",
    img: "avf4qeujo.webp",
    description: "Next.js is a React framework for building server-rendered applications. You’re experienced with its features like file-based routing, API routes, and server-side rendering for performance optimization.",
    percentage: 40,
  },
];


const SkillSection = () => {
  return (
    // <section className="py-16 bg-transparent text-white">
    //   <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">My Skills</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4  mx-auto">
    //     {skills.map((skill, index) => (
    //       <motion.div
    //       initial={{ opacity: 0, y: 150 }} 
    //       whileInView={{ opacity: 1, y: 0 }} 
    //       transition={{ duration: 1}}
    //         key={index}
    //         className="p-6 bg-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    //       >
    //         <img
    //           src={skill.img}
    //           alt={skill.name}
    //           className="size-24 rounded-full mx-auto mb-4"
    //         />
    //         <h3 className="text-xl font-semibold text-orange-500 mb-2">{skill.name}</h3>
    //         <p className="text-gray-300 mb-4">{skill.description}</p>

    //         {/* Progress bar */}
    //         <div className="relative pt-1">
    //           <div className="flex mb-2 items-center justify-between">
    //             <span className="text-sm font-semibold">{skill.percentage}%</span>
    //           </div>
    //           <div className="flex mb-2 items-center justify-between">
    //             <div className="w-full bg-gray-200 rounded-full h-2.5">
    //               <div
    //                 className={`bg-orange-600 h-2.5 rounded-full`}
    //                 style={{ width: `${skill.percentage}%` }}
    //               ></div>
    //             </div>
    //           </div>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </section>
    <section className="py-16 bg-transparent  text-white">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">My Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4  mx-auto">
      {skills.map((skill, index) => (
        <motion.div
        initial={{ opacity: 0, y: 150 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1}}
          key={index}
          className="p-6 h-full flex flex-col bg-black rounded-lg shadow-lg hover:shadow-white transition-shadow duration-300"
        >
          <img
            src={skill.img}
            alt={skill.name}
            className="size-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-orange-500 mb-2">{skill.name}</h3>
          <p className="text-gray-300 flex-grow mb-4">{skill.description}</p>

          {/* Progress bar */}
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <span className="text-sm font-semibold">{skill.percentage}%</span>
            </div>
            <div className="flex mb-2 items-center justify-between">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`bg-orange-600 h-2.5 rounded-full`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
  );
};

export default SkillSection;
