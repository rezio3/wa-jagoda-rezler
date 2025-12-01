import { colors } from "../../assets/colors";
import CustomText from "../elements/CustomText";
import SectionWrapper from "../elements/SectionWrapper";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div
      className="nav-bar-container d-flex justify-content-center align-items-center"
      style={{ backgroundColor: colors.salmon }}
    >
      <SectionWrapper className="my-0 d-flex justify-content-center">
        <ul className="list-unstyled d-flex w-75 justify-content-between my-0">
          {navButtons.map((navButton, index) => (
            <li key={navButton.txt + index}>
              <CustomText
                fontWeight={500}
                fontSize={13}
                style={{ cursor: "pointer" }}
                className="p-3"
              >
                {navButton.txt}
              </CustomText>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </div>
  );
};

export default Navigation;
const navButtons = [
  { txt: "O MNIE", link: "" },
  { txt: "CONTENT CREATOR", link: "" },
  { txt: "OFERTA", link: "" },
  { txt: "KONTAKT", link: "" },
];
