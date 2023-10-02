/* eslint-disable */
// noinspection HtmlUnknownBooleanAttribute

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={3.75} rotationIntensity={4} floatIntensity={3}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow={true} receiveShadow={true} scale={2.75}>
        <icosahedronGeometry args={[1, 20]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[2 * Math.PI, Math.PI, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal
          position={[0, 1, 0]}
          rotation={[1.2, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal
          position={[0, -1, 0]}
          rotation={[1.2, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal
          position={[1, 0, 0]}
          rotation={[0, 1.2, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal
          position={[-1, 0, 0]}
          rotation={[0, 1.2, 0]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
