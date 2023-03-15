import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeJS = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
      renderer.outputEncoding = THREE.sRGBEncoding;
      const camera = new THREE.PerspectiveCamera(30, 1);
      camera.position.set(0, 0, 5);
      const loader = new GLTFLoader();
      scene.background = new THREE.Color("white");
      const light = new THREE.DirectionalLight(0xffff00, 10);
      scene.add(light);

      loader.load("robot_playground/scene.gltf", (object) => {
        scene.add(object.scene);
        renderer.render(scene, camera);
      });
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} id="canvas" width="300" height="300"></canvas>;
};

// const ThreeJS =() =>{
 
//   let scene = new THREE.Scene();
//   let renderer = new THREE.WebGLRenderer({
//     canvas : document.querySelector('#canvas'),
//     antialias : true
//   });
//   renderer.outputEncoding =THREE.sRGBEncoding;

//   let camera = new THREE.PerspectiveCamera(30,1);
//   camera.position.set(0,0,5);

//   let loader = new GLTFLoader();
//   loader.load('robot_playground/scene.gltf', function(gltf){
//     scene.add(gltf.scene);
//     renderer.render(scene,camera);
//     function animate(){
//       requestAnimationFrame(animate)
//       gltf.scene.rotation.y += 0.001;
//       renderer.render(scene,camera);

//     }
//     animate()
//   });
//   return(
//     <canvas  id="canvas" ></canvas>
  
//   )

// }
export default ThreeJS;