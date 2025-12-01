import CustomText from "./CustomText";

const Header = () => {
  return (
    <div className="d-flex align-items-center flex-column gap-1 py-5">
      <CustomText
        headerType="h1"
        fontSize={24}
        fontWeight={400}
        letterSpacing={3.5}
      >
        JAGODA REZLER
      </CustomText>
      <CustomText
        headerType="h2"
        fontSize={14}
        fontWeight={400}
        letterSpacing={2}
        fontFamily="Playfair Display, serif"
      >
        wirtualna asystentka
      </CustomText>
    </div>
  );
};

export default Header;
