<template>
  <div ref="canvasContainer" class="animated-bg" :style="{ opacity: isDark ? 0.8 : 0.15 }">
    <!-- Fallback if WebGL fails or crashes -->
    <div v-if="hasError" class="bg-fallback"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

const isDark = useState('isDark', () => true);
const canvasContainer = ref(null);
const hasError = ref(false);

let scene, camera, renderer, particles, lines;
let animationFrameId;

const initThree = () => {
  try {
    if (!canvasContainer.value) return;

    // Check for WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.warn('WebGL not supported, using fallback background');
      hasError.value = true;
      return;
    }

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7;

    renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasContainer.value.appendChild(renderer.domElement);

    // Particle System
    const geometry = new THREE.BufferGeometry();
    const gridSize = 50; 
    const count = gridSize * gridSize;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const colorCyan = new THREE.Color('#22d3ee');
    const colorGold = new THREE.Color('#f59e0b');

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const idx = (i * gridSize + j);
        const x = (i - gridSize / 2) * 0.4;
        const y = (j - gridSize / 2) * 0.4;
        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = 0;

        const mix = Math.random();
        const color = mix > 0.9 ? colorGold : colorCyan;
        colors[idx * 3] = color.r;
        colors[idx * 3 + 1] = color.g;
        colors[idx * 3 + 2] = color.b;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Connectivity
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.05,
      blending: THREE.AdditiveBlending
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(count * 12); 
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const animate = () => {
      if (hasError.value) return;
      animationFrameId = requestAnimationFrame(animate);
      
      try {
        const time = Date.now() * 0.0005;
        const posAttr = particles.geometry.attributes.position.array;
        const lineAttr = lines.geometry.attributes.position.array;
        
        let lineIdx = 0;

        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            const idx = i * gridSize + j;
            const x = (i - gridSize / 2) * 0.4;
            const y = (j - gridSize / 2) * 0.4;
            
            const z = Math.sin(x * 0.3 + time) * Math.cos(y * 0.3 + time) * 2;
            posAttr[idx * 3 + 2] = z;

            if (j < gridSize - 1) {
              const nextIdx = idx + 1;
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
        renderer.render(scene, camera);
      } catch (err) {
        console.error('Three.js animation error:', err);
        hasError.value = true;
        cancelAnimationFrame(animationFrameId);
      }
    };

    animate();
    window.addEventListener('resize', handleResize);
  } catch (err) {
    console.error('Three.js initialization failed:', err);
    hasError.value = true;
  }
};

const handleResize = () => {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onMounted(() => {
  // Use timeout to ensure DOM is fully ready and avoid blocking main thread
  setTimeout(initThree, 100);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  if (renderer) renderer.dispose();
  if (particles) {
    particles.geometry.dispose();
    particles.material.dispose();
  }
  if (lines) {
    lines.geometry.dispose();
    lines.material.dispose();
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
  pointer-events: none;
  background: #081425;
  overflow: hidden;
}

.bg-fallback {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, #0c1324 0%, #040e1f 100%);
}
</style>