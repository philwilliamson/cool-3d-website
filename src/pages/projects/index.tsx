import tw from "twin.macro";

import Card from "../../components/card";
// import SphereScene from "../../components/sphere-scene";
// import ElaborateScene from "../../components/elaborate-scene";
import SphereScene from "../../components/sphere-scene";
import ElaborateScene from "../../components/elaborate-scene";

import SandboxView from "../../components/sandbox/sandbox-view";
import SandboxContextProvider from "../../components/sandbox/sandbox-context";
import CrystalConstructorView from "../../components/crystal-constructor/crystal-constructor-view";
import CrystalConstructorContextProvider from "../../components/crystal-constructor/crystal-constructor-context";

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
			<Card title="WIP" bgColor={`black`} link="/projects/sandbox-page">
				<SandboxContextProvider>
					<SandboxView />
				</SandboxContextProvider>
			</Card>
			<Card
				title="Crystal Constructor"
				bgColor={`black`}
				link="/projects/crystal-constructor-page"
			>
				<CrystalConstructorContextProvider>
					<CrystalConstructorView />
				</CrystalConstructorContextProvider>
			</Card>
		</div>
	);
};

export default Projects;
