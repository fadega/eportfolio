import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  const TestimonialStyles = `mx-auto relative max-w-[400px] h-[350px]
    flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] 
    before:-ml-[110px] before:left-1/2 `;
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADINGS */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/4" />
        <p className="mt-10 ">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at.
        </p>
      </motion.div>
      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap:8">
        <motion.div
          className={`bg-blue ${TestimonialStyles} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale:1 },
          }}
        >

          <p className="font-playfair text-6xl">“</p>
          <p className="text-ceter text-xl">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at.
          </p>

        </motion.div>

        <motion.div
          className={`bg-red ${TestimonialStyles} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale:1 },
          }}
        >

          <p className="font-playfair text-6xl">“</p>
          <p className="text-ceter text-xl">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at.
          </p>

        </motion.div>

        <motion.div
          className={`bg-yellow ${TestimonialStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale:1 },
          }}
        >

          <p className="font-playfair text-6xl">“</p>
          <p className="text-ceter text-xl">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
