import tw, { css } from "twin.macro";
import Link from "next/link";

interface CardInterface {
	children: JSX.Element;
	title?: string;
	link?: string;
	bgColor?: string;
}

const Card = ({
	children,
	title,
	link,
	bgColor,
}: CardInterface): JSX.Element => {
	return (
		<Link href={`${link || `javascript:void(0);`}`}>
			<div
				css={[
					tw`w-60 min-width[15rem] h-60 m-5`,
					tw`flex flex-col items-center justify-center`,
					tw`cursor-pointer`,
					tw`overflow-hidden `,
					bgColor && tw`background[bgColor]`,
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
		</Link>
	);
};

export default Card;
