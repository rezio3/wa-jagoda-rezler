import { colors } from "../../assets/colors";
import CustomText from "../elements/CustomText";
import Header from "../elements/Header";
import SectionWrapper from "../elements/SectionWrapper";
import footerWaves from "../../img/footerWaves.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div
      className="w-100 d-flex flex-column align-items-center"
      style={{ backgroundColor: colors.salmon }}
    >
      <SectionWrapper className="d-flex align-items-center justify-content-between">
        <Header />

        <ul className="list-unstyled d-flex">
          {footerNavButtons.map((navButton, index) => (
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
      <img src={footerWaves} alt="waves-img" className="w-100" />
    </div>
  );
};

export default Footer;

const footerNavButtons = [
  { txt: "O MNIE", link: "" },
  { txt: "CONTENT CREATOR", link: "" },
  { txt: "OFERTA", link: "" },
  { txt: "KONTAKT", link: "" },
];
