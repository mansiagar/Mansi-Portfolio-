import Home from "@/Pages/Home";
import "../style/navbar.css";
import "../style/animation.css";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as ScrollLink, Element } from "react-scroll";
import About from "@/Pages/About";

import Skills from "@/Pages/Skills";
import { useState } from "react";

import Project from "@/Pages/Project";
import Contacts from "@/Pages/Contacts";
import ExperienceCard from "@/Pages/Exprience";

const Navbar = () => {
  const [aboutVisible, setaboutVisible] = useState(false);
  const [skillVisible, setSkillVisible] = useState(false);
  const [projectVisible, setprojectVisible] = useState(false);
  return (
    <div>
      <Box>
        {/* Navbar */}
        <Flex
          as="nav"
          top={5}
          zIndex={1000}
          className="navbar"
          overflowX={"hidden"}
        >
          <div className="right_side color-change-2x ">
            <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
              <Link p={3} color="white" fontWeight="bold" cursor="pointer">
                Home
              </Link>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
              <Link
                p={3}
                color="white"
                fontWeight="bold"
                cursor="pointer"
                onClick={() => setaboutVisible(true)}
              >
                About
              </Link>
            </ScrollLink>
            {/* Due state */}
            <ScrollLink to="skill" smooth={true} duration={500} offset={-70}>
              <Link
                p={3}
                color="white"
                fontWeight="bold"
                cursor="pointer"
                onClick={() => setSkillVisible(true)}
              >
                Skills
              </Link>
            </ScrollLink>
            <ScrollLink
              to="Exprience"
              smooth={true}
              duration={500}
              offset={-70}
            >
              <Link p={3} color="white" fontWeight="bold" cursor="pointer">
                Experience
              </Link>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
              <Link
                p={3}
                color="white"
                fontWeight="bold"
                cursor="pointer"
                onClick={() => setprojectVisible(true)}
              >
                Projects
              </Link>
            </ScrollLink>
            <ScrollLink to="contacts" smooth={true} duration={500} offset={-70}>
              <Link p={3} color="white" fontWeight="bold" cursor="pointer">
                Contact
              </Link>
            </ScrollLink>
          </div>
        </Flex>
        {/* Home Section */}
        <Element name="home">
          <Box>
            <Home />
          </Box>
        </Element>

        <Element name="about">
          <Box>
            <About isVisible={aboutVisible} />
          </Box>
        </Element>
        {/* skills Section */}
        <Element name="skill">
          <Box>
            <Skills isVisible={skillVisible} />
          </Box>
        </Element>
        {/* Exprience Section */}
        <Element name="Exprience">
          <Box>
            <ExperienceCard />
          </Box>
        </Element>
        {/* Projects Section */}
        <Element name="projects">
          <Box>
            <Project isVisible={projectVisible} />
          </Box>
        </Element>
        {/* Contacts Section */}
        <Element name="contacts">
          <Box>
            <Contacts />
          </Box>
        </Element>
      </Box>
    </div>
  );
};

export default Navbar;
