import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center py-6 md:h-full gap-16 "
    >
  

      {/* IAMGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 mt-16 md:mt-32 z-10">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
            before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
            before:border-2 before:border-blue before:z-[-1] "
          >
            <img
              src="./assets/profile-image.png"
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
              max-w-[400px] md:max-w-[600px]" 
            />
          </div>
        ) : (
       
             <img
              src="./assets/profile-image.png"
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
              max-w-[400px] md:max-w-[600px]" 
            />
        )}


      </div>

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center items-center md:items-start">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-center md:text-left">
          Hi, I'm <span className="text-red">F</span>adega{" "}
          <span className="text-red">A</span>fa
        </h1>
        <h2 className="font-opensans text-xl md:text-2xl font-semibold text-center md:text-left">
          I'm a full-stack web developer
        </h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-red text-white font-opensans text-lg font-semibold py-2 px-4 rounded-full mt-4"
        >
          <AnchorLink
            href="#contact"
            onClick={() => setSelectedPage("contact")}
          >
            Contact Me
          </AnchorLink>
        </motion.button>
      </div>

    </section>
  );
};

export default Landing;
