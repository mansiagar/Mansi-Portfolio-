import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as ScrollLink, Element } from "react-scroll";
import About from "./Pages/About";

const Portfolio = () => {
  return (
    <Box>
      {/* Navbar */}
      <Flex
        as="nav"
        justify="center"
        bg="teal.500"
        p={4}
        position="fixed"
        width="100%"
        top={0}
        zIndex={1000}
      >
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
        <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
          <Link p={3} color="white" fontWeight="bold" cursor="pointer">
            Projects
          </Link>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
          <Link p={3} color="white" fontWeight="bold" cursor="pointer">
            Contact
          </Link>
        </ScrollLink>
      </Flex>

      {/* Home Section */}
      <Element name="home">
        <Box h="100vh" bg="gray.100" p={10} textAlign="center" pt="100px">
          <Text fontSize="3xl" fontWeight="bold">
            Welcome to My Portfolio
          </Text>
          <Text mt={4}>
            I&apos;m a Front-End Developer passionate about building great user
            experiences.
          </Text>
        </Box>
      </Element>

      {/* About Section */}
      <Element name="about">
        <About />
      </Element>

      {/* Projects Section */}
      <Element name="projects">
        <Box h="100vh" bg="gray.300" p={10} textAlign="center" pt="100px">
          <Text fontSize="3xl" fontWeight="bold">
            Projects
          </Text>
          <Text mt={4}>Here are some of my recent works.</Text>
        </Box>
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <Box h="100vh" bg="gray.400" p={10} textAlign="center" pt="100px">
          <Text fontSize="3xl" fontWeight="bold">
            Contact Me
          </Text>
          <Text mt={4}>
            Let&apos;s connect and collaborate on exciting projects!
          </Text>
        </Box>
      </Element>
    </Box>
  );
};

export default Portfolio;
