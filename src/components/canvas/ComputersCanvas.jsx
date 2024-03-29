import {Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Computers } from './Computers';

const ComputersCanvas = ({ref}) => { 
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    addEventListener("webglcontextlost", (event) => {
      setInitialized(false);
    }
    );
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
   
  }, []);

 const [initialized, setInitialized] = useState(false)

  useEffect(() => {
      if (!initialized) {
          setInitialized(true);
      }
  }, [initialized]);

  
  if (!initialized) {
      return <div></div>
  }
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true  }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        
      </Suspense>

      <Preload all />
    </Canvas>
  );
};


export default ComputersCanvas