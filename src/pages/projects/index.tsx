import tw from "twin.macro";

import Card from "../../components/card";
import SphereScene from "../../components/three-js-canvas";
import ElaborateScene from "../../components/elaborate-scene";

const Projects = (): JSX.Element => {
	return (
		<div
			css={[
				tw`w-screen h-screen flex flex-row`,
				tw`box-border p-24`,
				tw`bg-blue-300`,
			]}
		>
			<Card title="Sphere" link="/projects/sphere">
				<SphereScene />
			</Card>
			<Card title="Elaborate Scene" link="/projects/elaborate-scene">
				<ElaborateScene />
			</Card>
		</div>
	);
};

export default Projects;
