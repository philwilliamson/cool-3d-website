import tw from "twin.macro";

import Card from "../../components/card";
// import SphereScene from "../../components/sphere-scene";
// import ElaborateScene from "../../components/elaborate-scene";
import SphereScene from "../../components/sphere-scene";
import ElaborateScene from "../../components/elaborate-scene";

import SandboxPage from "./sandbox-page";

const Projects = (): JSX.Element => {
	return (
		<div
			css={[
				tw`w-screen h-screen flex flex-row`,
				tw`box-border p-24`,
				tw`bg-blue-300`,
			]}
		>
			<Card title="Sphere" link="/projects/sphere-page">
				<SphereScene />
			</Card>
			<Card title="Elaborate Scene" link="/projects/elaborate-scene-page">
				<ElaborateScene />
			</Card>
			<Card title="WIP" link="/projects/sandbox-page">
				<SandboxPage />
			</Card>
		</div>
	);
};

export default Projects;
