import CustomButton from "../elements/CustomButton";
import CustomText from "../elements/CustomText";
import aboutImg from "../../img/Frame 17.png";

const About = () => {
  return (
    <div className="d-flex justify-content-start align-items-center w-100 ">
      <img
        src={aboutImg}
        alt={"about-me-img"}
        style={{ minWidth: "50%", height: "auto", objectFit: "contain" }}
      />
      <div
        className="d-flex flex-column align-items-start ms-5 mt-5"
        style={{ width: 450 }}
      >
        <CustomText
          fontSize={18}
          headerType="span"
          fontWeight={600}
          className="mb-4"
        >
          CZEŚĆ, TU JAGODA
        </CustomText>
        <CustomText
          fontSize={18}
          headerType="span"
          fontWeight={300}
          className="mb-2"
        >
          Na co dzień wspieram przedsiębiorców w budowaniu skutecznej obecności
          w social mediach.
        </CustomText>
        <CustomText
          fontSize={18}
          headerType="span"
          fontWeight={300}
          className="mb-3"
        >
          Tworzę treści, które nie tylko dobrze wyglądają,
          <br /> ale też angażują i pomagają rozwijać biznes.
        </CustomText>
        <CustomButton className="mt-5">Zobacz ofertę</CustomButton>
      </div>
    </div>
  );
};

export default About;
