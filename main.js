//import './style.css'
//import javascriptLogo from './javascript.svg'
//import { setupCounter } from './counter.js'

import * as THREE from "https://cdn.skypack.dev/three@0.145.0"
import vertexShader from '/vertex.glsl'
import fragmentShader from '/fragment.glsl'
//console.log(fragmentShader)


const scene = new THREE.Scene()
const camera = new THREE.
  PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1, 
    1000
)

const renderer = new THREE.WebGLRenderer({
  antialias:true
})
renderer.setSize(innerWidth,innerHeight)
renderer.setPixelRatio (window.devicePixelRatio)
document.body.appendChild (renderer.domElement)

//create a sphere
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  //new THREE.MeshBasicMaterial({
  new THREE.ShaderMaterial({
    //color: 0xff0000,
    vertexShader,
    fragmentShader,
    uniforms:{
      globeTexture:{
        value: new TextureLoader().load('/globe.jpg')

      }
    }
   //map : new THREE.TextureLoader().load('globe.jpg')
  })
)

scene.add(sphere)
camera.position.z = 10

function animate(){
  requestAnimationFrame(animate)
  renderer.render (scene,camera)
}

animate()