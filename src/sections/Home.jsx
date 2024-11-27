/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import HomeProfile from "../components/HomeProfile";
import FloatingElements from "../components/FloatingElements";
// import { useControls } from "leva";
// import { Leva } from "leva";

const Home = () => {
  // const x = useControls("HomeProfile", {
  //   positionX: {
  //     value: -1.2,
  //     min: -10,
  //     max: 20,
  //   },
  //   positionY: {
  //     value: -5.8,
  //     min: -10,
  //     max: 20,
  //   },
  //   positionZ: {
  //     value: 1,
  //     min: -10,
  //     max: 20,
  //   },
  //   rotationX: {
  //     value: 0.3,
  //     min: -10,
  //     max: 20,
  //   },
  //   rotationY: {
  //     value: 0.1,
  //     min: -10,
  //     max: 20,
  //   },
  //   rotationZ: {
  //     value: 0.0,
  //     min: -10,
  //     max: 20,
  //   },
  // });

  return (
    <section className="h-screen w-full flex flex-col sm:flex-row relative">
      {/* Left Side */}
      <div className=" w-full sm:w-2/5  flex-col justify-center items-start mx-auto gap-3 pl-4 sm:pl-8 h-full">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[#adba5e] text-left sm:text-lg text-sm mt-0">
            Hey there,
          </p>
          <p className="mt-0 sm:text-6xl text-xl font-extrabold text-[#2966AC] text-left font-generalsans">
            I&apos;m Kyi Sin Thant
          </p>
          <p className="text-[#adba5e] text-left sm:text-lg text-sm mt-[0.5rem]">
            Front-end developer{" "}
            <span className=" text-[#2966AC] text-left sm:text-lg text-sm mt-[0.5rem]">
              {" "}
              with a background in web development.
            </span>
          </p>
          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <a
              href="#hire-me"
              className="bg-[#2966AC] text-white py-2 px-4 rounded hover:bg-[#adba5e] transition"
            >
              Hire Me
            </a>
            <a
              href="#my-works"
              className="bg-[#adba5e] text-white py-2 px-4 rounded hover:bg-[#2966AC] transition"
            >
              My Works
            </a>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full sm:w-3/5 hidden sm:flex items-center justify-center h-full mt-[1rem]">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 28]} />
            <HomeProfile
              position={[-1.2, -5.8, 1.0]}
              rotation={[0.3, -0.1, 0.0]}
              // position={[x.positionX, x.positionY, x.positionZ]} // Adjust the position of the floating elements, 0.5]}
              // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
              scale={2.6}
              className="ml-2 mr-2"
            />

            <group>
              <FloatingElements
                position={[0.4, 6.7, 2.2]}
                rotation={[3.1, 4.9, 2.8]}
                scale={1}
              />
            </group>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight
              position={[20, 20, 20]}
              angle={0.15}
              penumbra={1}
              decay={0}
              intensity={Math.PI}
            />
            <Environment preset="city" />
          </Suspense>

          <ContactShadows
            position={[0, -4.5, 0]}
            scale={50}
            blur={2}
            far={4.5}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      <div className="absolute left-0 right-0 flex w-full  c-space">
        <a href="#contact" className="w-fit">
          <button></button>
        </a>
      </div>
    </section>
  );
};

export default Home;
