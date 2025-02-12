import { Box, Text, Link } from "@chakra-ui/react";
import { VStack, HStack, Icon } from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "../style/contact.css";

import "../style/animation.css";
import SocialLinks from "./Social";
const Contacts = () => {
  return (
    <div>
      <Box
        className="color-change-2x" // Animista animation
        maxW="100%" // Set max width
        h="350px"
        p={8} // Add padding inside the container
        boxShadow="lg" // Add shadow for depth
        borderRadius="lg" // Rounded corners
        bg="gray.100" // Light background
      >
        <Box
          display="flex" // Use flexbox for alignment
          flexDirection="column" // Stack items vertically
          justifyContent="center" // Center content vertically
          alignItems="center" // Center content horizontally
        >
          <Text className="focus-in" fontSize="3xl" fontWeight="bold" p={5}>
            ✨CONTACT ME✨
          </Text>

          <Box
            p={5}
            className="Contact_container"
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
          >
            <VStack align="start" spacing={10}>
              <HStack className="focus-in">
                <Icon as={MdPhone} boxSize={5} color="blue.500" />
                <Text fontSize="lg" fontWeight="medium">
                  7389835904
                </Text>
              </HStack>

              <HStack className="focus-in">
                <Icon as={MdEmail} boxSize={5} color="blue.500" />
                <Text fontSize="lg" fontWeight="medium">
                  mansiagarwal293@gmail.com
                </Text>
              </HStack>

              <HStack className="focus-in">
                <Icon as={MdLocationOn} boxSize={5} color="blue.500" />
                <Text fontSize="lg" fontWeight="medium">
                  Ujjain, Madhya Pradesh
                </Text>
              </HStack>
            </VStack>
          </Box>
          <SocialLinks />
        </Box>
      </Box>
    </div>
  );
};

export default Contacts;
