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
    <section className="c-space my-20" id="about">
      <p className="head-text">About me</p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full mt-12">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/k.png"
              alt="grid1"
              className="w-[75%] sm:h[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext"> Hi, I&apos;m Kyi</p>
              <p className="grid-subtext">
                With 7 years of experience, I have honed my skills in frontend
                and backend development, focusing on website development. I am
                willing to work as a Frontend Developer and have experience
                working with companies based in Singapore and Thailand.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="./assets/tech.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I am experienced with Vue 2, Vue 3, TypeScript, Bootstrap,
                Vuetify, Tailwind CSS, React,Three.js, Next.js, and Nuxt.js,
                specializing in JavaScript/TypeScript with a focus on the Vue
                and Nuxt ecosystems.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:w-[276px] h-fit flex justify-center items-center">
              <Globe
                height={276}
                width={276}
                backgroundColor="#FDFBE8"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I'm based in Thailand, open to remote work worldwide, and
                available to reside in another country if needed. I would also
                require work visa sponsorship.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        {/* <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                {" "}
                I love solving problems and building things through code.
                Programming isn't just my profession—it's my passion. I enjoy
                exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/email.png"
              alt="grid-4"
              className="w-[64px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Info</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium  text-[#2966AC]">
                  kyisinthant199765@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
