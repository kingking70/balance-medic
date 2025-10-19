import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimatedModel } from "./components/AnimatedModel";


export default function Experience() {
    
    
    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <directionalLight position={[-5, -5, -5]} intensity={0.5} />
            
            <AnimatedModel />

            <OrbitControls 
                enablePan={true} 
                enableZoom={true} 
                enableRotate={true}
                position={[3, 3, 3]}
            />
        </>
    )
}