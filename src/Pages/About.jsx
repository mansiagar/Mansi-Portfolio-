import { Box, Button, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import "../style/about.css";
import { useState, useEffect } from "react";
// eslint-disable-next-line react/prop-types
const About = ({ isVisible }) => {
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
        <Text fontSize="3xl" fontWeight="bold" p={5}>
          ABOUT ME
        </Text>
      </Box>

      <div className="about_container">
        <div className="left_container">
          <Image
            className={animate ? "scale-in-hor-left" : ""}
            src="https://raw.githubusercontent.com/mansiagar/Mansi-Portfolio-/673c4fdcd211b66950d6653962981ca0c0c93721/src/assets/profile.jpg"
            alt="Profile Picture"
            boxSize="300px"
            borderRadius="full"
          />
        </div>
        <div className="right_container">
          <Box className={animate ? "scale-in-hor-right" : ""}>
            <Text lineHeight={2}>
              A passionate Front-End Developer with expertise in React.js,
              JavaScript, and modern UI libraries like Chakra UI and Material
              UI, dedicated to creating responsive, interactive, and visually
              appealing web applications. With a strong foundation in HTML, CSS,
              and JavaScript, the focus is on writing clean, efficient, and
              maintainable code while ensuring a seamless user experience.
              Always eager to learn new technologies, optimize performance, and
              bring creative ideas to life, with the goal of contributing to
              innovative projects and collaborating with teams to develop
              high-quality web solutions that make a difference. 🚀
            </Text>
            <Button>
              <a
                href="https://drive.google.com/file/d/1iLIlfZZFkcBjwcBSuPhSq9Rj4LEbx_KA/view?usp=sharing"
                target="blank"
              >
                Resume
              </a>
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default About;
