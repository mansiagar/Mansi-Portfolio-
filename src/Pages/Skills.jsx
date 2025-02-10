import { Image } from "@chakra-ui/react";
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import s4 from "../assets/s4.svg";
import s5 from "../assets/s5.svg";
import s6 from "../assets/s6.svg";
import s7 from "../assets/s7.svg";
import "../style/skills.css";

const Skills = () => {
  return (
    <div className="logo_container">
      <Image src={s1} className="logo bounce-in-top" />
      <Image src={s2} className="logo bounce-in-top" />
      <Image src={s3} className="logo bounce-in-top" />
      <Image src={s4} className="logo bounce-in-top" />
      <Image src={s5} className="logo bounce-in-top" />
      <Image src={s6} className="logo bounce-in-top" />
      <Image src={s7} className="logo bounce-in-top" />
    </div>
  );
};

export default Skills;
