import {OrbitControls, ScrollControls} from '@react-three/drei';
import {Office} from './Office';
import {Overlay} from './Overlay';

export const Experience = () => {

  return (
    <>
      <ambientLight intensity={1.5} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
{/* 
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
    </>
  );
};
