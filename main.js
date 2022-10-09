//import './style.css'
//import javascriptLogo from './javascript.svg'
//import { setupCounter } from './counter.js'

import * as THREE from "https://cdn.skypack.dev/three@0.145.0"


const scene = new THREE.Scene()
const camera = new THREE.
  PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1, 
    1000
)

const renderer = new THREE.WebGLRenderer(
  )
renderer.setSize(innerWidth,innerHeight)
document.body.appendChild (renderer.domElement)

//create a sphere
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.MeshBasicMaterial({
    //color: 0xff0000
    map : new THREE.TextureLoader().load('./img/globe.jpg')
  })
)

scene.add(sphere)
camera.position.z = 10

function animate(){
  requestAnimationFrame(animate)
  renderer.render (scene,camera)
}

animate()