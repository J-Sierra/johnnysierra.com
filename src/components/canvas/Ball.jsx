/* eslint-disable */
// noinspection HtmlUnknownBooleanAttribute

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const ballRef = useRef();

  useFrame(() => {
    // Rotate the ball in each frame
    ballRef.current.rotation.y += 0.0005;
  });

  return (
    <Float speed={3.75} rotationIntensity={4} floatIntensity={3}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow={true} receiveShadow={true} scale={2.75} ref={ballRef}>
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
        {/* Remove OrbitControls */}
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
