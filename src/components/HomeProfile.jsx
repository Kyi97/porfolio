import React from "react";
import { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const HomeProfile = (props) => {
  const { nodes, materials } = useGLTF("/models/cutecomputer.glb");
  const monitorTexture = useTexture("/textures/desk/monitor.png");
  const screenTexture = useTexture("/textures/desk/succeed.jpg");

  const groupRef = useRef();
  const floatSpeed = 1.5;
  const floatHeight = 0.2;

  materials[".003"].map = monitorTexture;
  materials[".003"].map.needsUpdate = true;
  materials["Material.001"].map = screenTexture;
  materials["Material.001"].map.needsUpdate = true;

  materials["Material.001"].emissive = new THREE.Color(0x000000); // Reduce emissive effect if set
  materials["Material.001"].roughness = 0.8; // Increase roughness for a matte finish
  materials["Material.001"].metalness = 0.1;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Calculate the new position for floating
    const y = Math.sin(t * floatSpeed) * floatHeight;
    if (groupRef.current) {
      groupRef.current.position.y = -6 + y; // Float up and down
    }
  });
  return (
    <group ref={groupRef} {...props} dispose={null}>
      {" "}
      <group position={[1.872, 2.22, 0.79]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials[".003"]}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials[".003"]}
        ></mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials[".001"]}
        position={[1.045, 3.426, -0.732]}
        rotation={[0, -0.334, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials[".001"]}
        position={[-0.629, 3.136, 1.628]}
        rotation={[0, -0.103, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.material}
        position={[-1.298, 2.322, 1.157]}
        rotation={[0, -0.103, 0]}
        scale={0.096}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.material}
        position={[-1.321, 2.322, 1.386]}
        rotation={[0, -0.103, 0]}
        scale={0.096}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.material}
        position={[1.395, 2.273, 1.667]}
        rotation={[0, -0.103, 0]}
        scale={0.081}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.material}
        position={[-0.85, 2.322, 1.687]}
        rotation={[0, -0.103, 0]}
        scale={0.096}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.material}
        position={[1.368, 2.273, 1.924]}
        rotation={[0, -0.103, 0]}
        scale={0.081}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.material}
        position={[-1.358, 2.273, 1.644]}
        rotation={[0, -0.103, 0]}
        scale={0.081}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.material}
        position={[0.236, 2.273, 2.084]}
        rotation={[0, -0.103, 0]}
        scale={[2.451, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.material}
        position={[-1.376, 2.322, 1.914]}
        rotation={[0, -0.103, 0]}
        scale={0.096}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.material}
        position={[1.102, 2.322, 2.169]}
        rotation={[0, -0.103, 0]}
        scale={0.096}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials[".003"]}
        position={[2.738, 2.763, -0.708]}
        rotation={[0, -0.343, 0]}
        scale={[0.075, 0.022, 0.104]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials["Material.001"]}
        position={[1.045, 3.426, -0.732]}
        rotation={[0, -0.334, 0]}
      />
    </group>
  );
};

useGLTF.preload("/models/cutecomputer.glb");

export default HomeProfile;
