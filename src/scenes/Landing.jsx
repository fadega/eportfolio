import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
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
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Fadega
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20
                        xs:before:content-brush before:absolute before:-left-[35px] 
                        before:-top-[125px] before:z-[-1] ml-3"
            >
              Afa
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            reiciendis eveniet laboriosam, eos ipsa quidem error ad et.
          </p>
        </motion.div>

        {/* CALL TO ACTION */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7
            font-semibold hover:bg-blue hover:text-white transition duration-500"
            href="#contact"
            onClick={() => setSelectedPage("contact")}
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
            className="roundeed-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            href="#contact"
            onClick={() => setSelectedPage("contact")}
          >
            <div
                className="bg-deep-blue hover:text-red transition duration-500 w-full h-full
                flex items-center justify-center font-playfair px-10"
            >
                Let's Talk
            </div>
          </AnchorLink>
        </motion.div>

        {/* SOCIAL MEDIA */}
        <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <SocialMediaIcons />
            
        </motion.div>

            
      </div>
    </section>
  );
};

export default Landing;
