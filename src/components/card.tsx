import tw, { css } from "twin.macro";

interface CardInterface {
	children: JSX.Element;
	title?: string;
}

const Card = ({ children, title }: CardInterface): JSX.Element => {
	return (
		<div
			css={[
				tw`w-60 min-width[15rem] h-60 m-5`,
				tw`flex flex-col items-center justify-center`,
				tw`cursor-pointer`,
				tw`overflow-hidden `,
				css`
					border-radius: 30px;
					border-collapse: separate;
				`,
			]}
		>
			{title && (
				<h1
					css={[
						tw`flex w-full p-2 height[50px]`,
						tw`font-family['Press Start 2P'] text-xs text-white`,
						tw`items-center justify-center bg-purple-600`,
					]}
				>
					{title}
				</h1>
			)}
			{children}
		</div>
	);
};

export default Card;
