import { Box, Image, Text } from "@chakra-ui/react";
import { Button } from "react-scroll";
import "../style/project.css";
const Project = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="3xl" fontWeight="bold" p={5}>
          My PROJECTS
        </Text>
      </Box>

      <div className="project_container">
        <div className="project_1">
          <div className="image_container">
            <Image src="" />
          </div>
          <div className="description_container">
            <Text display={"flex"} justifyContent={"center"}>
              The Resume Builder App is an open-source, user-friendly web
              application designed to help users create professional resumes
              effortlessly. Developed using React.js, Ant Design, and Bootstrap,
              this project offers multiple pre-designed templates where users
              can input their details and generate a polished resume in PDF
              format. With a clean and intuitive UI, the application provides a
              real-time preview of the resume, ensuring a seamless experience.
              The PDF export functionality allows users to download their
              resumes instantly. This project was built during my internship at
              Xenosis IT Solution and is open-source, enabling community
              contributions for further enhancements. The application is fully
              responsive, making it accessible across all devices. By
              integrating modern UI libraries and optimizing for performance,
              this project showcases my expertise in React.js, front-end
              development, and UI/UX design. Check out the project on GitHub and
              explore the live demo to see it in action.
            </Text>
            <div className="button_container">
              <Button>
                <a
                  href="https://mansiagar.github.io/resume_builder_app/"
                  target="blank"
                ></a>
                Live Demo
              </Button>
              <Button>
                <a
                  href="https://github.com/mansiagar/resume_builder_app.git"
                  target="blank"
                ></a>
                GitHub Link
              </Button>
            </div>
          </div>
        </div>
        <div className="project_2"></div>
      </div>
    </div>
  );
};

export default Project;
