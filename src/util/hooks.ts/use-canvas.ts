import * as THREE from "three";
import { useRef, useEffect } from "react";

const useCanvas = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas: Element = canvasRef.current;
		const scene = new THREE.Scene();
		const geometry = new THREE.SphereGeometry(10, 10, 10);
		const material = new THREE.MeshBasicMaterial({ color: `#7700ff` });
		const mesh = new THREE.Mesh(geometry, material);
		const wireframe = new THREE.WireframeGeometry(geometry);
		const line = new THREE.LineSegments(wireframe);
		const camera = new THREE.PerspectiveCamera(
			100,
			canvas.clientWidth / canvas.clientHeight,
			0.1,
			1000
		);

		scene.add(mesh);
		scene.add(line);
		camera.position.z = 20;
		const renderer = new THREE.WebGLRenderer({});
		console.log(renderer);
		console.log(canvas);
		renderer.setSize(canvas.clientWidth, canvas.clientHeight);
		canvas.append(renderer.domElement);
		let animationFrameId;

		const animate = () => {
			renderer.setSize(canvas.clientWidth, canvas.clientHeight);
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
			mesh.rotation.x += 0.001;
			line.rotation.x += 0.001;
			mesh.rotation.y += 0.001;
			line.rotation.y += 0.001;
			renderer.render(scene, camera);
			animationFrameId = window.requestAnimationFrame(animate);
		};
		animate();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return canvasRef;
};

export default useCanvas;
