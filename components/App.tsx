'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import NeuralNetwork from '@/components/NeuralNetwork'
import { useControls } from 'leva'

export default function App() {
    const { pointSize, count } = useControls("Neural Network", {
        pointSize: { value:3, min:0, max:10, step: 0.1},
        count: { value:500, min:0, max:1000, step: 10}
    })

    return (
        <Canvas camera={{ position: [0, 0, 17.5] }}>
            <NeuralNetwork
                pointSize = {pointSize}
                particleCount = {count} 
            />
            <OrbitControls />
        </Canvas>
    )
}