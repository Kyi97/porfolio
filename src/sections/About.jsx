// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Function to handle scroll animations
const useScrollAnimation = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Re-animates when scrolling
    threshold: 0.2, // Triggers when 20% is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return { ref, controls };
};

// Left-to-right and right-to-left animations
const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const About = () => {
  // Image Animation
  const { ref: imgRef, controls: imgControls } = useScrollAnimation();

  return (
    <section className="c-space min-h-screen pt-20" id="about">
      <p className="head-text">About me</p>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {/* Left Column (Image & Contact Info) */}

        {/* Image with slight shake effect */}
        <div className="col-span-1 xl:row-span-3 flex flex-col items-center">
          {/* Image with slight shake effect */}
          <motion.div
            className="w-[75%] sm:h-[276px] h-fit object-contain"
            ref={imgRef}
            initial="hidden"
            animate={imgControls}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: {
                opacity: 1,
                x: [0, -5, 5, -5, 5, 0],
                transition: { duration: 1, repeat: 1, ease: "easeInOut" },
              },
            }}
          >
            <img src="/assets/k.png" alt="grid1" className="w-full h-auto" />
          </motion.div>

          {/* Contact Info (Moved outside of motion.div) */}
          <ul className="mt-40 space-y-4 text-left w-full">
            <li>
              <a
                href="/path/to/cv.pdf"
                download
                className="text-[#2966AC] hover:underline"
              >
                Download CV
              </a>
            </li>
            <li className="text-[#2966AC]">Phone Number: +660949492201</li>
            <li className="text-[#2966AC]">
              Email Address: kyisinthant199765@gmail.com
            </li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          {/* Right Column with Alternating Animations */}
          {[
            {
              text: "Hi, I'm Kyi",
              desc: "With 7 years of experience, I have honed my skills in frontend and backend development, specializing in website development.",
              variant: fadeInLeft,
            },
            {
              text: "Tech Stack",
              desc: "I have expertise in Vue 2, Vue 3, TypeScript, Bootstrap, Vuetify, Tailwind CSS, React, Three.js, Next.js, and Nuxt.js. My primary focus is JavaScript/TypeScript within the Vue and Nuxt ecosystems.",
              variant: fadeInRight,
            },
            {
              text: "Availability",
              desc: "I’m flexible with time zones and communication across locations. Based in Thailand, I am open to remote work worldwide and willing to relocate if needed. I would require work visa sponsorship.",
              variant: fadeInLeft,
            },
            {
              text: "Passions & Hobbies",
              desc: "In my free time, I enjoy exploring new technologies, contributing to open-source projects, and staying active through indoor and outdoor activities like drawing, painting, and swimming. I also have a passion for photography and love capturing the beauty of nature.",
              variant: fadeInRight,
            },
          ].map((item, index) => {
            const { ref, controls } = useScrollAnimation(); // Separate animation for each section

            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={item.variant}
                className="mt-8"
              >
                <p className="grid-headtext">{item.text}</p>
                <p className="grid-subtext">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
