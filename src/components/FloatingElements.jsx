import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const FloatingElements = (props) => {
  const floatRef = useRef();
  const { scene } = useGLTF("/models/my_cute_duck.glb");
  const floatSpeed = 1.5; // Speed of the float
  const floatHeight = 0.2; // Height of the float

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Calculate the new position for floating
    const y = Math.sin(t * floatSpeed) * floatHeight;
    if (floatRef.current) {
      floatRef.current.position.y = 7 + y; // Float up and down
    }
  });
  return (
    <mesh ref={floatRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default FloatingElements;
