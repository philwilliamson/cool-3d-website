import tw from "twin.macro";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { WireframeGeometry } from "three";

const Scene = (): JSX.Element => {
	const canvasRef = useRef(null);

	// const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		// setHasMounted(true);
		const container = document.querySelector(`#canvas`);
		const scene = new THREE.Scene();
		const geometry = new THREE.SphereGeometry(10, 10, 10);
		const material = new THREE.MeshBasicMaterial({ color: `#7700ff` });
		const mesh = new THREE.Mesh(geometry, material);
		const wireframe = new THREE.WireframeGeometry(geometry);
		const line = new THREE.LineSegments(wireframe);
		const camera = new THREE.PerspectiveCamera(
			100,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);

		scene.add(mesh);
		scene.add(line);
		camera.position.z = 20;
		const renderer = new THREE.WebGLRenderer({});
		renderer.setSize(container.clientWidth, container.clientHeight);
		container.append(renderer.domElement);
		function animate() {
			requestAnimationFrame(animate);
			mesh.rotation.x += 0.001;
			line.rotation.x += 0.001;
			mesh.rotation.y += 0.001;
			line.rotation.y += 0.001;
			renderer.render(scene, camera);
		}
		animate();
	}, [canvasRef]);

	// if (!hasMounted) {
	// 	return null;
	// }

	return (
		<div css={[tw`flex flex-col items-center`, tw`h-screen`]}>
			<h1
				css={[
					tw`text-4xl bg-purple-900 text-blue-100 flex justify-center items-center h-20 w-full`,
				]}
			>
				Scene
			</h1>
			<div id={`canvas`} css={[tw`w-full h-full`]}></div>
		</div>
	);
};

export default Scene;
