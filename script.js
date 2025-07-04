// 3D Spinning Coin Background
const container = document.getElementById('threejs-bg');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor(0x000000, 0); // transparent background
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Coin geometry: cylinder with gold material
const geometry = new THREE.CylinderGeometry(2, 2, 0.3, 64);
const material = new THREE.MeshStandardMaterial({ color: 0xFFD700, metalness: 0.8, roughness: 0.3 });
const coin = new THREE.Mesh(geometry, material);
scene.add(coin);

// Lighting
const light = new THREE.PointLight(0xffffff, 1.5, 100);
light.position.set(5, 10, 7.5);
scene.add(light);

camera.position.z = 7;

function animate() {
  requestAnimationFrame(animate);
  coin.rotation.y += 0.01;
  coin.rotation.x = Math.PI / 9; // slight tilt for effect
  renderer.render(scene, camera);
}
animate();

// Make canvas responsive
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
