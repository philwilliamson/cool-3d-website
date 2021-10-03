import tw from "twin.macro";

import CrystalConstructor from "../../components/crystal-constructor/crystal-constuctor";

const CrystalConstructorPage = (): JSX.Element => {
  return (
    <div css={[tw`h-screen`]}>
      <CrystalConstructor />
    </div>
  );
};

export default CrystalConstructorPage;
