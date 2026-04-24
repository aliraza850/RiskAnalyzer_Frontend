<template>
  <div ref="canvasContainer" class="animated-bg" :style="{ opacity: isDark ? 0.8 : 0.15 }"></div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

const isDark = useState('isDark', () => true);
const canvasContainer = ref(null);
let scene, camera, renderer, particles, lines;
let animationFrameId;

const initThree = () => {
  if (!canvasContainer.value) return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 7;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  canvasContainer.value.appendChild(renderer.domElement);

  // Particle System
  const geometry = new THREE.BufferGeometry();
  const gridSize = 60; // Increased density
  const count = gridSize * gridSize;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  const colorCyan = new THREE.Color('#22d3ee');
  const colorGold = new THREE.Color('#f59e0b');

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const idx = (i * gridSize + j);
      
      const x = (i - gridSize / 2) * 0.35;
      const y = (j - gridSize / 2) * 0.35;
      const z = 0;

      positions[idx * 3] = x;
      positions[idx * 3 + 1] = y;
      positions[idx * 3 + 2] = z;

      const mix = Math.random();
      const color = mix > 0.85 ? colorGold : colorCyan;
      colors[idx * 3] = color.r;
      colors[idx * 3 + 1] = color.g;
      colors[idx * 3 + 2] = color.b;
    }
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.008, // Very small particles
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Connectivity
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x22d3ee,
    transparent: true,
    opacity: 0.08,
    blending: THREE.AdditiveBlending
  });

  const lineGeometry = new THREE.BufferGeometry();
  const linePositions = new Float32Array(count * 12); // Connections for grid neighbors
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lines);

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    
    const time = Date.now() * 0.0008;
    const posAttr = particles.geometry.attributes.position.array;
    const lineAttr = lines.geometry.attributes.position.array;
    
    let lineIdx = 0;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const idx = i * gridSize + j;
        const x = (i - gridSize / 2) * 0.35;
        const y = (j - gridSize / 2) * 0.35;
        
        // Complex multi-wave pattern
        const wave1 = Math.sin(x * 0.4 + time);
        const wave2 = Math.cos(y * 0.3 + time * 0.8);
        const wave3 = Math.sin((x + y) * 0.2 + time * 0.5);
        
        const z = wave1 * wave2 * wave3 * 2.5;
        posAttr[idx * 3 + 2] = z;

        // Connect to right neighbor
        if (j < gridSize - 1) {
          const nextIdx = idx + 1;
          lineAttr[lineIdx++] = posAttr[idx * 3];
          lineAttr[lineIdx++] = posAttr[idx * 3 + 1];
          lineAttr[lineIdx++] = posAttr[idx * 3 + 2];
          lineAttr[lineIdx++] = posAttr[nextIdx * 3];
          lineAttr[lineIdx++] = posAttr[nextIdx * 3 + 1];
          lineAttr[lineIdx++] = posAttr[nextIdx * 3 + 2];
        }
        // Connect to bottom neighbor
        if (i < gridSize - 1) {
          const nextIdx = idx + gridSize;
          lineAttr[lineIdx++] = posAttr[idx * 3];
          lineAttr[lineIdx++] = posAttr[idx * 3 + 1];
          lineAttr[lineIdx++] = posAttr[idx * 3 + 2];
          lineAttr[lineIdx++] = posAttr[nextIdx * 3];
          lineAttr[lineIdx++] = posAttr[nextIdx * 3 + 1];
          lineAttr[lineIdx++] = posAttr[nextIdx * 3 + 2];
        }
      }
    }
    
    particles.geometry.attributes.position.needsUpdate = true;
    lines.geometry.attributes.position.needsUpdate = true;

    particles.rotation.z = time * 0.02;
    lines.rotation.z = time * 0.02;

    renderer.render(scene, camera);
  };

  animate();

  window.addEventListener('resize', handleResize);
};

const handleResize = () => {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onMounted(() => {
  initThree();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  cancelAnimationFrame(animationFrameId);
  if (renderer) {
    renderer.dispose();
  }
});
</script>

<style scoped>
.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: transparent;
  overflow: hidden;
}
</style>