import { Button, HStack } from "@chakra-ui/react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as ScrollLink, Element } from "react-scroll";
import "../style/NavDraw.css";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Home from "@/Pages/Home";
import About from "@/Pages/About";
import { useState } from "react";
import Skills from "@/Pages/Skills";
import ExperienceCard from "@/Pages/Exprience";
import Project from "@/Pages/Project";
import Contacts from "@/Pages/Contacts";

const Demo = () => {
  const [aboutVisible, setaboutVisible] = useState(false);
  const [skillVisible, setSkillVisible] = useState(false);
  const [projectVisible, setprojectVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {" "}
      <HStack wrap="wrap">
        <DrawerRoot
          placement={"start"}
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen}
        >
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              mt={10}
              position={"fixed"}
              display={{ base: "block", md: "none" }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <svg
                className="hamburger"
                viewBox="0 0 100 80"
                width="40"
                height="40"
              >
                <rect width="100" height="20" fill="black"></rect>
                <rect y="30" width="100" height="20" fill="black"></rect>
                <rect y="60" width="100" height="20" fill="black"></rect>
              </svg>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerBody>
              <Box>
                {/* Navbar */}
                <Flex
                  as="nav"
                  p={4}
                  position="fixed"
                  width="100%"
                  top={5}
                  zIndex={1000}
                  className="NavDraw"
                >
                  <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    <Link
                      p={3}
                      color="#1E3A8A"
                      fontWeight="bold"
                      cursor="pointer"
                      onClick={(event) => {
                        event.preventDefault();

                        setIsDrawerOpen(false);
                      }}
                    >
                      Home
                    </Link>
                  </ScrollLink>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    <Link
                      p={3}
                      color="#1E3A8A"
                      fontWeight="bold"
                      cursor="pointer"
                      onClick={(event) => {
                        event.preventDefault();
                        setaboutVisible(true);
                        setIsDrawerOpen(false);
                      }}
                    >
                      About
                    </Link>
                  </ScrollLink>
                  <ScrollLink
                    to="skill"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    <Link
                      p={3}
                      color="#1E3A8A"
                      fontWeight="bold"
                      cursor="pointer"
                      onClick={(event) => {
                        event.preventDefault();
                        setSkillVisible(true);
                        setIsDrawerOpen(false);
                      }}
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
                    <Link
                      p={3}
                      color="#1E3A8A"
                      fontWeight="bold"
                      cursor="pointer"
                      onClick={(event) => {
                        event.preventDefault();

                        setIsDrawerOpen(false);
                      }}
                    >
                      Experience
                    </Link>
                  </ScrollLink>
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    <Link
                      p={3}
                      color="#1E3A8A"
                      fontWeight="bold"
                      cursor="pointer"
                      onClick={(event) => {
                        event.preventDefault();
                        setprojectVisible(true);
                        setIsDrawerOpen(false);
                      }}
                    >
                      Projects
                    </Link>
                  </ScrollLink>
                  <ScrollLink
                    to="contacts"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    <Link
                      p={3}
                      color="#1E3A8A"
                      fontWeight="bold"
                      cursor="pointer"
                      onClick={(event) => {
                        event.preventDefault();

                        setIsDrawerOpen(false);
                      }}
                    >
                      Contact
                    </Link>
                  </ScrollLink>
                </Flex>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerRoot>
      </HStack>
      <Box>
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
        <Element name="skill">
          <Box>
            <Skills isVisible={skillVisible} />
          </Box>
        </Element>
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
    </>
  );
};
export default Demo;
