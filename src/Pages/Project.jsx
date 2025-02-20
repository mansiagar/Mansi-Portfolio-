import { Box, Image, Text } from "@chakra-ui/react";
import { Button } from "react-scroll";
import "../style/project.css";
import "../style/about.css";
import { useEffect, useState } from "react";
const Project = (isVisible) => {
  const [animate, setanimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setanimate(true);
    }
  }, [isVisible]);

  console.log(animate, "project");
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="3xl" fontWeight="bold" p={8} color="blue.600">
          MY PROJECTS
        </Text>
      </Box>

      <div className="project_container">
        <div className="project_1">
          <div className="image_container_1">
            <Image
              className={`${animate ? "scale-in-hor-left" : ""} image_1`}
              src="https://raw.githubusercontent.com/mansiagar/Mansi-Portfolio-/a33c59c4c8cb2f47fd45cfdd3beba3e2d04fb945/src/assets/Project%201.jpg"
            />
          </div>
          <div
            className={`${
              animate ? "scale-in-hor-right" : ""
            } description_container_1 `}
            style={{ margin: "10px" }}
          >
            <Text
              as="p"
              className="dec_text"
              color="black"
              justifyContent={"center"}
            >
              The
              <Text as="span" bg="orange.600" px={2} borderRadius="md">
                Resume Builder App
              </Text>{" "}
              is an open-source web application that simplifies resume creation
              with pre-designed templates and real-time previews. Built with
              React.js, Ant Design, and Bootstrap, it allows users to input
              details and download a PDF resume instantly. Developed during my
              internship at Xenosis IT Solution, the app is fully responsive and
              open to community contributions. This project highlights my skills
              in React.js, front-end development, and UI/UX design.
            </Text>
            <Text className="highlight">
              Explore it on GitHub and check out the live demo!{" "}
            </Text>
            <div className="button_container">
              <Button className="live_button">
                <a
                  href="https://mansiagar.github.io/resume_builder_app/"
                  target="blank"
                ></a>
                Live Demo
              </Button>
              <Button className="Github_button">
                <a
                  href="https://github.com/mansiagar/resume_builder_app.git"
                  target="blank"
                ></a>
                GitHub Link
              </Button>
            </div>
          </div>
        </div>
        <div className="project_2">
          {/* dec_start */}
          <div
            className={`${
              animate ? "scale-in-hor-left" : ""
            } description_container`}
            style={{ margin: "30px" }}
          >
            <Text
              as="p"
              justifyContent={"center"}
              color="black"
              className="dec_text"
            >
              The{" "}
              <Text as="span" bg="orange.600" px={2} borderRadius="md">
                Trend Bazzar
              </Text>{" "}
              is a women-focused e-commerce platform designed for a seamless
              shopping experience. Built using HTML, CSS, and JavaScript, with
              Glitch API handling the backend, this project offers a responsive
              design, ensuring accessibility across all devices. Users can
              browse a curated collection of women&apos;s fashion, add items to
              their cart, and explore stylish trends effortlessly. The platform
              emphasizes smooth navigation, interactive UI, and optimized
              performance. This project highlights my skills in front-end
              development, API integration, and responsive web design.
            </Text>

            <Text className="highlight">
              Explore it on GitHub and check out the live demo! 💃🛍️
            </Text>
            <div className="button_container_2">
              <Button className="live_button">
                <a
                  href="https://mansiagar.github.io/resume_builder_app/"
                  target="blank"
                ></a>
                Live Demo
              </Button>
              <Button className="Github_button">
                <a
                  href="https://github.com/mansiagar/resume_builder_app.git"
                  target="blank"
                ></a>
                GitHub Link
              </Button>
            </div>
          </div>

          {/* dec_end */}
          <div className="image_container_2">
            <Image
              className={`${animate ? "scale-in-hor-right" : ""} image_2 `}
              src="https://raw.githubusercontent.com/mansiagar/Mansi-Portfolio-/003e3552d80711c4e8c37466978f98871dcdcd62/src/assets/Project%202.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
