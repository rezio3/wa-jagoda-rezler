import CustomText from "../elements/CustomText";
import wavesImg from "../../img/waves.svg";

type ExperienceItemProps = {
  text: string;
  img: string;
  length: number;
  index: number;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  text,
  img,
  length,
  index,
}) => {
  console.log(length - 1 === index);
  return (
    <div className="d-flex flex-column align-items-center ">
      <div style={{ width: 800, minWidth: 800 }} className="d-flex">
        <img src={img} alt="exp-icon" className="me-5" />
        <CustomText fontSize={18} fontWeight={300} headerType="span">
          {text}
        </CustomText>
      </div>
      {length - 1 !== index && (
        <img
          src={wavesImg}
          alt="waves-img"
          style={{ margin: "50px 0px", width: 850, minWidth: 850 }}
        />
      )}
    </div>
  );
};

export default ExperienceItem;
