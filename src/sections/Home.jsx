/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
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

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Front-end Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      className="h-screen w-full flex flex-col sm:flex-row relative home"
      id="home"
    >
      {/* Left Side */}
      <div className=" w-full sm:w-2/5  flex-col justify-center items-start mx-auto gap-3 pl-4 sm:pl-8 h-full">
        <div className="flex flex-col justify-center h-full">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h1>
                  {`Hello ! I'm Kyi`}{" "}
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Web Developer", "Front-end Developer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p className="text-gray-400 pt-6">
                  with 7 years of experience specializing in front-end
                  technologies like Vue.js, Nuxt.js, React.js, TypeScript, and
                  Tailwind CSS. With a strong foundation in JavaScript and
                  Three.js, I create interactive and visually engaging user
                  experiences. Additionally, I have backend expertise in .NET,
                  enabling me to build seamless and scalable web applications.
                  Passionate about clean code, performance optimization, and
                  user-centric design, I thrive in collaborative environments
                  and enjoy leading projects that drive innovation.
                </p>
                {/* Buttons */}
                <div className="flex gap-4 mt-10">
                  <a
                    href="#about"
                    className="bg-[#2966AC] text-white py-2 px-4 rounded hover:bg-[#adba5e] transition"
                  >
                    Hire Me
                  </a>
                  <a
                    href="#projects"
                    className="bg-[#adba5e] text-white py-2 px-4 rounded hover:bg-[#2966AC] transition"
                  >
                    My Works
                  </a>
                </div>
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full sm:w-3/5 hidden sm:flex items-center justify-center h-full mt-[5rem]">
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
