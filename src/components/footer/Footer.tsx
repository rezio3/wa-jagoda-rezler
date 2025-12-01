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
          <div className="ms-5">
            <FacebookIcon className="mx-2" style={{ cursor: "pointer" }} />
            <InstagramIcon className="mx-2" style={{ cursor: "pointer" }} />
          </div>
        </ul>
      </SectionWrapper>
      <img src={footerWaves} alt="waves-img" className="w-100" />
      <CustomText fontSize={12} style={{ color: "#787878" }}>
        {" "}
        &#169; 2025, Domigrafikuje
      </CustomText>
      <CustomText fontSize={12} style={{ color: "#787878" }} className="mb-4">
        Developed by Jakub Rezler Frontend Services
      </CustomText>
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
