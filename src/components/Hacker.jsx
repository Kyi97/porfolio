import React from "react";
import { useGLTF } from "@react-three/drei";

const Hacker = (props) => {
  const { nodes, materials } = useGLTF("/models/cutecomputer.glb");
  return (
    <group {...props} dispose={null} > {/* Increased scale */}
      <group position={[1.872, 2.22, 0.79]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials[".003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials[".003"]}
        />
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

export default Hacker;
