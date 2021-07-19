import tw from "twin.macro";
import Link from "next/link";

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
			<Link href={`/projects/sphere`}>
				<a>
					<Card title="Sphere">
						<SphereScene />
					</Card>
				</a>
			</Link>
			<Link href={`/projects/elaborate-scene`}>
				<a>
					<Card title="ElaborateScenePage">
						<ElaborateScene />
					</Card>
				</a>
			</Link>
		</div>
	);
};

export default Projects;
