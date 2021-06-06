import '../style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as PLANET from './planet'

// Setup
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Background
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('img/space.jpg');
scene.background = spaceTexture;

// Sun
scene.add(PLANET.sun);
PLANET.sun.position.z = -8;
PLANET.sun.position.x = 6;

// Mercury
scene.add(PLANET.mercury);
PLANET.mercury.position.z = 10;
PLANET.mercury.position.x = -2;

// Venus
scene.add(PLANET.venus);
PLANET.venus.position.z = 15;
PLANET.venus.position.x = -10;

// Earth
scene.add(PLANET.earth);
PLANET.earth.position.z = 27;
PLANET.earth.position.x = -15;

// Mars
scene.add(PLANET.mars);
PLANET.mars.position.z = 35;
PLANET.mars.position.x = -19;

// Jupiter
scene.add(PLANET.jupiter);
PLANET.jupiter.position.z = 47;
PLANET.jupiter.position.x = -25;

// Saturn
scene.add(PLANET.saturn);
scene.add(PLANET.saturnTorus)
PLANET.saturn.position.z = 55;
PLANET.saturn.position.x = -30;
PLANET.saturnTorus.rotation.set(
  150,
  60,
  100
)
PLANET.saturnTorus.position.set(
  PLANET.saturn.position.x, 
  PLANET.saturn.position.y, 
  PLANET.saturn.position.z
)

// Uranus
scene.add(PLANET.uranus);
scene.add(PLANET.uranusTorus)
PLANET.uranus.position.z = 63;
PLANET.uranus.position.x = -39;
PLANET.uranusTorus.rotation.set(
  150,
  60,
  100
)
PLANET.uranusTorus.position.set(
  PLANET.uranus.position.x, 
  PLANET.uranus.position.y, 
  PLANET.uranus.position.z
)

// Neptune
scene.add(PLANET.neptune);
PLANET.neptune.position.z = 77;
PLANET.neptune.position.x = -25;


// Planet self-rotation
function planetSelfRotation() {
  PLANET.sun.rotation.y += 0.005;
  PLANET.mercury.rotation.y += 0.005;
  PLANET.venus.rotation.y += 0.005;
  PLANET.earth.rotation.y += 0.005;
  PLANET.mars.rotation.y += 0.005;
  PLANET.jupiter.rotation.y += 0.005;
  PLANET.saturn.rotation.y += 0.005;
  PLANET.uranus.rotation.y += 0.005;
  PLANET.neptune.rotation.y += 0.005;
}

// Planet Scroll Animation
function planerScrollAnimation(planet) {
  planet.rotation.x += 0.01;
  planet.rotation.y += 0.01;
  planet.rotation.z += 0.05;
}



// Scroll Animation
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  planerScrollAnimation(PLANET.sun)
  planerScrollAnimation(PLANET.mercury)
  planerScrollAnimation(PLANET.venus)
  planerScrollAnimation(PLANET.earth)
  planerScrollAnimation(PLANET.mars)
  planerScrollAnimation(PLANET.jupiter)
  planerScrollAnimation(PLANET.saturn)
  planerScrollAnimation(PLANET.uranus)
  planerScrollAnimation(PLANET.neptune)

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  planetSelfRotation()

  // controls.update();

  renderer.render(scene, camera);
}

animate();
