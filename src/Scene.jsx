/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: Jeremy E. Grayson (https://sketchfab.com/JeremyGrayson)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/plastic-water-bottle-efa1c4c1f2a947659ded2e61e20eff31
Title: Plastic Water Bottle
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.023']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.024']} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')