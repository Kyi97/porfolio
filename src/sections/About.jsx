// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" kyisinthant199765@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space min-h-screen pt-20" id="about">
      <p className="head-text">About me</p>
      <div className="grid xl:grid-cols-2 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full mt-10">
        <div className="col-span-1 xl:row-span-3 flex flex-col justify-start items-start">
          <img
            src="/assets/k.png"
            alt="grid1"
            className="w-[75%] sm:h[276px] h-fit object-contain"
          />

          <ul className="mt-8 space-y-4 text-left">
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
        <div className="col-span-1 xl:row-span-3 mt-8">
          <div>
            <p className="grid-headtext"> Hi, I&apos;m Kyi</p>
            <p className="grid-subtext">
              With 7 years of experience, I have honed my skills in frontend and
              backend development, focusing on website development.
            </p>
          </div>
          <div className="mt-8">
            <p className="grid-headtext">Tech Stack</p>
            <p className="grid-subtext">
              I am experienced with Vue 2, Vue 3, TypeScript, Bootstrap,
              Vuetify, Tailwind CSS, React,Three.js, Next.js, and Nuxt.js,
              specializing in JavaScript/TypeScript with a focus on the Vue and
              Nuxt ecosystems.
            </p>
          </div>
          <div className="mt-8">
            <p className="grid-headtext">
              I’m very flexible with time zone communications & locations
            </p>
            <p className="grid-subtext">
              I'm based in Thailand, open to remote work worldwide, and
              available to reside in another country if needed. I would also
              require work visa sponsorship.
            </p>
          </div>
          <div className="mt-8">
            <p className="grid-headtext">Passion & Hobbies</p>
            <p className="grid-subtext">
              In my free time, I enjoy exploring new technologies, contributing
              to open-source projects, and staying active with indoor and
              outdoor activities like drawing, painting, and swimming. I also
              have a passion for photography and love capturing the beauty of
              nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
