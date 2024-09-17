import React, { useEffect, useState } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';

export default function Model({mouse}) {
  const [activeShape, setActiveShape] = useState(1);
  
    useEffect( () => {
      setTimeout( () => {
        if(activeShape == 11){
          setActiveShape(1)
        }
        else{
          setActiveShape(activeShape + 1)
        }
      }, 2000)
    }, [activeShape])

  const { nodes } = useGLTF("/medias/bottigliefinalissime7.glb");
  return (
    <Float>
      <group>
      <Mesh node={nodes.Bottle} multiplier={2.4} mouse={mouse} isActive={activeShape == 1}/>
      <Mesh node={nodes.Bottle001} multiplier={2.4} mouse={mouse} isActive={activeShape == 2}/>
      <Mesh node={nodes.Bottle002} multiplier={1.2} mouse={mouse} isActive={activeShape == 3}/>
      <Mesh node={nodes.Bottle003} multiplier={1} mouse={mouse} isActive={activeShape == 4}/>
      <Mesh node={nodes.Bottle004} multiplier={1.8} mouse={mouse} isActive={activeShape == 5}/>
      <Mesh node={nodes.Bottle005} multiplier={1.8} mouse={mouse} isActive={activeShape == 6}/>
      <Mesh node={nodes.Bottle006} multiplier={2} mouse={mouse} isActive={activeShape == 7}/>
      <Mesh node={nodes.Bottle007} multiplier={1.2} mouse={mouse} isActive={activeShape == 8}/>
      <Mesh node={nodes.Bottle008} multiplier={1.6} mouse={mouse} isActive={activeShape == 9}/>
      <Mesh node={nodes.Bottle009} multiplier={1.8} mouse={mouse} isActive={activeShape == 10}/>
      <Mesh node={nodes.Bottle010} multiplier={1.5} mouse={mouse} isActive={activeShape == 11}/>
      <Mesh node={nodes.Bottle011} multiplier={1.2} mouse={mouse} isActive={activeShape == 12}/>
      <Mesh node={nodes.Bottle012} multiplier={1.8} mouse={mouse} isActive={activeShape == 13}/>
      <Mesh node={nodes.Bottle013} multiplier={1.6} mouse={mouse} isActive={activeShape == 14}/>
      <Mesh node={nodes.Bottle014} multiplier={1.2} mouse={mouse} isActive={activeShape == 15}/>
      </group>
    </Float>
  );
}


useGLTF.preload("/medias/bottigliefinalissime7.glb");


function Mesh({node, multiplier, mouse, isActive}) {
  const { castShadow, receiveShadow, geometry, material, position, scale, rotation } = node;
  const a = multiplier / 2;
  const rotationX = useTransform(mouse.x, [0,1], [rotation.x - a, rotation.x + a]);
  const rotationY = useTransform(mouse.y, [0,1], [rotation.y - a, rotation.y + a]);
  const positionX = useTransform(mouse.x, [0,1], [position.x - multiplier * 2, position.x + multiplier * 2]);
  const positionY = useTransform(mouse.y, [0,1], [position.y + multiplier * 2, position.y - multiplier * 2])
  const getRandomMultiplier = () => {
    return Math.floor(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
  }

  return (
       <Float>
        <motion.mesh
          castShadow={castShadow}
          receiveShadow={receiveShadow}
          geometry={geometry}
          material={material}
          position={position}
          rotation={rotation}
          scale={scale}
          rotation-x={rotationY}
          rotation-y={rotationX}
          position-x={positionX}
          position-y={positionY}
          animate={{rotateZ: isActive ? rotation.z + getRandomMultiplier() : null}}
          transition={{type: "spring", stiffness: 75, damping: 100, mass: 3}}
        />
       </Float>
  )
}
