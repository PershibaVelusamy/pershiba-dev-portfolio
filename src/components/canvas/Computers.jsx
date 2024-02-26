
import {  useGLTF } from "@react-three/drei";


export const Computers = ({isMobile}) => {
    
 

   const computer = useGLTF("./desktop_pc/scene.gltf");
    console.log(computer,"computer")
    return (
      <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.55}
        position={isMobile ? [0, -3, -2.2] : [0, -4.05, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
    )
  }