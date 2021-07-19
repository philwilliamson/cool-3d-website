import * as THREE from "three";
import { useRef, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type ThreeJsCanvasRef = React.LegacyRef<HTMLDivElement>;

interface SceneParameters {
	object?: string;
}

const useCanvasRef = ({ object }: SceneParameters): ThreeJsCanvasRef => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas: Element = canvasRef.current;
		// window.addEventListener(`resize`, onResize);
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			100,
			canvas.clientWidth / canvas.clientHeight,
			0.1,
			1000
		);
		const geometry = new THREE.SphereGeometry(10, 10, 10);
		const material = new THREE.MeshStandardMaterial({ color: `#7700ff` });
		const mesh = new THREE.Mesh(geometry, material);

		const pointlight = new THREE.PointLight(`#ffffff`);
		const lightHelper = new THREE.PointLightHelper(pointlight);
		const gridHelper = new THREE.GridHelper(200, 50);
		const ambientlight = new THREE.AmbientLight(`#222222`);
		pointlight.position.set(10, 10, 10);

		scene.add(gridHelper, lightHelper);
		scene.add(pointlight);
		scene.add(ambientlight);

		scene.add(mesh);
		camera.position.z = 30;

		const renderer = new THREE.WebGLRenderer();
		const orbitControls = new OrbitControls(camera, renderer.domElement);

		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(canvas.clientWidth, canvas.clientHeight);

		canvas.append(renderer.domElement);

		let animationFrameId;

		const onResize = () => {
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(canvas.clientWidth, canvas.clientHeight);
		};
		window.addEventListener(`resize`, onResize);

		const animate = () => {
			mesh.rotation.x += 0.001;
			mesh.rotation.y += 0.001;

			if (orbitControls) {
				orbitControls.update();
			}

			renderer.render(scene, camera);
			animationFrameId = window.requestAnimationFrame(animate);
		};
		animate();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
			window.removeEventListener(`resize`, onResize);
			if (orbitControls) {
				orbitControls.dispose();
			}
		};
	}, []);

	return canvasRef;
};

export default useCanvasRef;
