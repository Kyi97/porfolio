import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Hacker from "../components/Hacker";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";

const Hero = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 440)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768)" });
  const isTablet = useMediaQuery({
    query: "min-width: 768, max-width: 1024",
  });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="h-screen w-full flex flex-col sm:flex-row relative">
      {/* Left Side */}
      <div className=" w-full sm:w-3/5 hidden sm:flex flex-col justify-center items-start mx-auto gap-3 pl-4 sm:pl-8 h-full">
        <div className="flex flex-col justify-center h-full">
          <p className="mt-0 sm:text-7xl text-xl font-extrabold text-[#2966AC] text-left font-generalsans">
            Hey there, I'm Kyi!
          </p>
          <p className="text-[#adba5e] text-left sm:text-lg text-sm mt-[0.5rem]">
            Front-end developer
          </p>
          
          <p className="text-[#2966AC] text-left sm:text-lg text-sm mt-[1rem]">
            with a background in web development and design with a passion for creating <br/>intuitive, user-friendly experiences.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="sm:flex sm:w-2/5 items-center justify-center h-full">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <Hacker
              position={[-1.2, -5.8, 1.0]}
              rotation={[0.48, -0.1, 0.0]}
              scale={sizes.deskScale}
            />
            <ambientLight intensity={2.5} />
            <directionalLight position={[0, 10, 0]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
