import * as THREE from "three";
import { useRef, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type ThreeJsCanvasRef = React.LegacyRef<HTMLDivElement>;

interface SceneParameters {
	object?: string;
}
/**
 * @param  {{subject:any}} scene
 * ! experimental hook
 * TODO: make this better
 */
const addStars = (scene: THREE.Scene) => {
	const geometry = new THREE.SphereGeometry(0.25, 24, 24);
	const material = new THREE.MeshBasicMaterial({ color: `#ffffff` });
	const star = new THREE.Mesh(geometry, material);

	const [x, y, z] = Array.from<number>({ length: 3 }).map(() =>
		THREE.MathUtils.randFloatSpread(100)
	);

	star.position.set(x, y, z);
	scene.add(star);
};

const onLoadHandler = () => {};

const useCanvasRef2 = ({ object }: SceneParameters): ThreeJsCanvasRef => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas: Element = canvasRef.current;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			80,
			canvas.clientWidth / canvas.clientHeight,
			0.1,
			1000
		);
		const geometry = new THREE.TorusGeometry(5, 1, 16, 100);
		const material = new THREE.MeshStandardMaterial({ color: `#ff1100` });
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

		// eslint-disable-next-line unicorn/no-array-for-each
		Array.from({ length: 200 }).forEach(() => addStars(scene));

		const spaceTexture = new THREE.TextureLoader().load(`/space.jpg`);
		scene.background = spaceTexture;

		const philTexture = new THREE.TextureLoader().load(`/arnold.jpg`);

		const phil = new THREE.Mesh(
			new THREE.BoxGeometry(3, 3, 3),
			new THREE.MeshBasicMaterial({ map: philTexture })
		);

		scene.add(phil);

		const moonTexture = new THREE.TextureLoader().load(`/moon.jpg`);
		const normalTexture = new THREE.TextureLoader().load(`/normal.jpg`);

		const moon = new THREE.Mesh(
			new THREE.SphereGeometry(3, 32, 32),
			new THREE.MeshStandardMaterial({
				map: moonTexture,
				normalMap: normalTexture,
			})
		);

		scene.add(moon);

		moon.position.set(10, 10, -10);

		pointlight.position.set(10, 10, 10);

		// DOLLY
		camera.position.x = -15;

		const renderer = new THREE.WebGLRenderer();

		const orbitControls = new OrbitControls(camera, renderer.domElement);

		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(canvas.clientWidth, canvas.clientHeight);

		canvas.append(renderer.domElement);

		let animationFrameId;

		// HANDLE IT
		const onResize = () => {
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(canvas.clientWidth, canvas.clientHeight);
		};
		window.addEventListener(`resize`, onResize);

		const animate = () => {
			mesh.rotation.x += 0.005;
			mesh.rotation.y += 0.005;

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

export default useCanvasRef2;
