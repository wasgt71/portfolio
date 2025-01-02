import * as THREE from "three";
import { useRef, useEffect } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


function Tools() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    renderer.render(scene, camera);

    const geometry = new THREE.IcosahedronGeometry(10, 1, 15, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0xff6347,
    });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

  const pointLight = new THREE.PointLight(0xffffff)
  pointLight.position.set(1, 1, 1)
  const ambientLight = new THREE.AmbientLight(0xffffff);

  scene.add(pointLight, ambientLight);

  const lightHelper = new THREE.PointLightHelper(pointLight)
  scene.add(lightHelper);

  const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      controls.update();
      
      renderer.render(scene, camera);
    }

    animate();
  }, []);
  return (
    <>
      <canvas ref={canvasRef} id="bg"></canvas>
    </>
  );
}

export default Tools;
