import Home from "@/Pages/Home";
import "../style/navbar.css";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as ScrollLink, Element } from "react-scroll";
import About from "@/Pages/About";
import Logo from "./Logo";
import Skills from "@/Pages/Skills";

const Navbar = () => {
  return (
    <div>
      <Box>
        {/* Navbar */}
        <Flex
          as="nav"
          p={4}
          position="fixed"
          width="100%"
          top={0}
          zIndex={1000}
          className="navbar"
        >
          <div className="right_side">
            <Logo />
          </div>
          <div className="left_side">
            <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
              <Link p={3} color="white" fontWeight="bold" cursor="pointer">
                Home
              </Link>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
              <Link p={3} color="white" fontWeight="bold" cursor="pointer">
                About
              </Link>
            </ScrollLink>
            {/* Due state */}
            <ScrollLink to="skill" smooth={true} duration={500} offset={-70}>
              <Link p={3} color="white" fontWeight="bold" cursor="pointer">
                Skills
              </Link>
            </ScrollLink>
            <ScrollLink
              to="Exprience"
              smooth={true}
              duration={500}
              offset={-70}
            >
              <Link p={3} color="white" fontFamily="bold" cursor="pointer">
                Experience
              </Link>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
              <Link p={3} color="white" fontWeight="bold" cursor="pointer">
                Projects
              </Link>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
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
        {/* about Section */}
        <Element name="about">
          <Box>
            <About />
          </Box>
        </Element>
        {/* skills Section */}
        <Element name="skill">
          <Box>
            <Skills />
          </Box>
        </Element>
      </Box>
    </div>
  );
};

export default Navbar;
