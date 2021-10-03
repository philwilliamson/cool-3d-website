import tw from "twin.macro";
import CrystalConstructorContextProvider from "./crystal-constructor-context";
import CrystalConstructorView from "./crystal-constructor-view";
import CrystalConstructorControl from "./crystal-constructor-control";

const CrystalConstructor = (): JSX.Element => {
	return (
		<div css={[tw`grid grid-cols-6`]}>
			<CrystalConstructorContextProvider>
				<CrystalConstructorControl />
				<CrystalConstructorView />
			</CrystalConstructorContextProvider>
		</div>
	);
};

export default CrystalConstructor;
