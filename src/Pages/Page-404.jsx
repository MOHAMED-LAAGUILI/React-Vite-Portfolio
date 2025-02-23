import { useEffect } from "react";
import * as THREE from "three";
import Layout from "../components/Layout/Layout";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function Page404() {
  useEffect(() => {
    const canvas = document.getElementById("starsCanvas");
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 1000;

    const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xff00ff, 0x00ffff, 0xffff00];

    // Create Stars
    const starsGeometry = new THREE.BufferGeometry();
    const starVertices = new Float32Array(5000 * 3);
    const starColors = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3;
      starVertices[i3] = (Math.random() - 0.5) * 2000;
      starVertices[i3 + 1] = (Math.random() - 0.5) * 2000;
      starVertices[i3 + 2] = (Math.random() - 0.5) * 2000;

      const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
      starColors[i3] = color.r;
      starColors[i3 + 1] = color.g;
      starColors[i3 + 2] = color.b;
    }

    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starVertices, 3));
    starsGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starsMaterial = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

  }, []);

  return (
    <Layout title="404 | Not Found">
      <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
   
        {/* 404 Content */}
        <div className="relative z-10 text-center dark:text-white">
          <h1 className="text-8xl font-bold flex justify-center gap-4">
        404
          </h1>
          <p className="text-xl mt-4">The page {"you're looking for doesn't"} exist.</p>

          <a
            href="https://laaguili-dev.app.genez.io"
            className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-purple-600 border rounded-lg transition duration-300 hover:bg-purple-800"
          >
            <FaArrowAltCircleLeft className=" inline-block mr-5" />Go Back
          </a>
        </div>
      </div>
    </Layout>
  );
}
