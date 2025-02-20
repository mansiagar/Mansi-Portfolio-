import { Box, Text } from "@chakra-ui/react";
import { VStack, HStack, Icon } from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

import "../style/contact.css";

import "../style/animation.css";
import SocialLinks from "./Social";
const Contacts = () => {
  return (
    <div>
      <Box
        className="color-change-2x"
        maxW="100%"
        h="400px"
        p={8}
        boxShadow="lg"
        borderRadius="lg"
        bg="gray.100"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className="contact_container"
        >
          <Text
            className="focus-in"
            fontSize="3xl"
            fontWeight="bold"
            p={5}
            color="blue.600"
          >
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
