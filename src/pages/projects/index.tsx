import tw, { css } from "twin.macro";
import Link from "next/link";

import ThreeJsCanvas from "../../components/three-js-canvas";

const Projects = (): JSX.Element => {
	return (
		<div
			css={[
				tw`w-screen h-screen flex flex-col`,
				tw`box-border p-24`,
				tw`bg-blue-300`,
			]}
		>
			<Link href="/projects/canvas">
				<div
					css={[
						tw`w-60 h-60 m-5`,
						tw`cursor-pointer`,
						tw`overflow-hidden `,
						css`
							border-radius: 30px;
							border-collapse: separate;
						`,
					]}
				>
					<ThreeJsCanvas headline={`Sphere`} />
				</div>
			</Link>
		</div>
	);
};

export default Projects;
