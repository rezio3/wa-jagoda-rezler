import CustomText from "../elements/CustomText";
import expIcon1 from "../../img/exp-icon-1.svg";
import expIcon2 from "../../img/exp-icon-2.svg";
import expIcon3 from "../../img/exp-icon-3.svg";
import ExperienceItem from "./ExperienceItem";
import { colors } from "../../assets/colors";

const ExperienceSection = () => {
  return (
    <div
      className="w-100 d-flex flex-column align-items-center"
      style={{ backgroundColor: colors.blue, padding: "100px 0px" }}
    >
      <CustomText headerType="h3" fontSize={23} className="mb-5">
        DOŚWIADCZENIE
      </CustomText>
      {experienceItems.map((expItem, index) => (
        <ExperienceItem
          key={expItem.txt + index}
          text={expItem.txt}
          img={expItem.img}
          length={experienceItems.length}
          index={index}
        />
      ))}
    </div>
  );
};

export default ExperienceSection;

const experienceItems = [
  {
    img: expIcon1,
    txt: "Mam doświadczenie w researchu, planowaniu contentu i pisaniu scenariuszy, a także w nagrywaniu i montażu rolek, tworzeniu grafik oraz angażujących relacji. Wiem, jak połączyć kreatywność z analizą i strategią!",
  },
  {
    img: expIcon2,
    txt: "Dzięki pracy w obsłudze klienta wiem też, jak ważna jest szybka, jasna i profesjonaln komuniakcja - i właśnie to staram się wnosić do każdej współpracy.",
  },
  {
    img: expIcon3,
    txt: "W pracy cenię sobie estetykę, spójność i autentyczność. Wierze, że dobrze zaprojektowane treści potrafią zbudować nie tylko rozpoznawalność, ale też prawdziwe relacje z odbiorcami.",
  },
];
