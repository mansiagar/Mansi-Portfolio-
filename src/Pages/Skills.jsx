import { Image, Text, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import s4 from "../assets/s4.svg";
import s5 from "../assets/s5.svg";
import s6 from "../assets/s6.svg";
import s7 from "../assets/s7.svg";
import s8 from "../assets/s8.svg";
import "../style/skills.css";

// eslint-disable-next-line react/prop-types
const Skills = ({ isVisible }) => {
  const [animate, setanimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setanimate(true);
    }
  }, [isVisible]);

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="3xl" fontWeight="bold" p={5} color="blue.600">
          TECHNICAL SKILLS{" "}
        </Text>
      </Box>

      <div className="logo_container">
        <Image src={s1} className={animate ? "logo bounce-in-top" : "logo"} />
        <Image src={s2} className={animate ? "logo bounce-in-top" : "logo"} />
        <Image src={s3} className={animate ? "logo bounce-in-top" : "logo"} />
        <Image src={s4} className={animate ? "logo bounce-in-top" : "logo"} />
        <Image src={s5} className={animate ? "logo bounce-in-top" : "logo"} />
        <Image src={s6} className={animate ? "logo bounce-in-top" : "logo"} />
        <Image src={s7} className={animate ? "logo bounce-in-top" : "logo"} />
        <Image src={s8} className={animate ? "logo bounce-in-top" : "logo"} />
      </div>

      {/* Git Statics start */}
      <div>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="3xl" fontWeight="bold" p={5}>
            GIT STATISTICS
          </Text>
        </Box>
        <div className="git_container">
          <div className="git_left_container">
            <Box className={animate ? "scale-in-hor-left" : ""}>
              <Image
                src="https://github-readme-stats.vercel.app/api?username=mansiagar&show_icons=true&theme=default"
                alt="Profile Picture"
                height="200px"
                width="100%"
                objectFit="cover"
              />
            </Box>
          </div>

          <div className="git_center_container">
            <Box className={animate ? "" : ""}>
              <Image
                src="https://github-readme-streak-stats.herokuapp.com/?user=mansiagar&theme=default"
                alt="Profile Picture"
                height="200px"
                width="100%"
                objectFit="cover"
              />
            </Box>
          </div>
          <div className="git_right_container">
            <Box className={animate ? "scale-in-hor-right" : ""}>
              <Image
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=mansiagar&layout=compact&theme=default"
                alt="Profile Picture"
                height="200px"
                width="100%"
                objectFit="cover"
                marginRight={10}
              />
            </Box>
          </div>
        </div>
      </div>
      {/* Git Statics end */}
    </div>
  );
};

export default Skills;
