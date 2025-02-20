import { Box, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialLinks = () => {
  return (
    <Box p={5} className="Contact_container" borderRadius="lg">
      <VStack align="center" spacing={5}>
        <HStack spacing={5}>
          {/* GitHub */}
          <Link href="https://github.com/mansiagar" isExternal>
            <Icon
              as={FaGithub}
              boxSize={10}
              color="blue.800"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)", color: "black" }}
            />
          </Link>

          {/* Email */}
          <Link href="mailto:mansiagarwal293@gmail.com" isExternal>
            <Icon
              as={MdEmail}
              boxSize={10}
              color="blue.500"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)", color: "blue.700" }}
            />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/mansi-agarwal-b13359215"
            isExternal
          >
            <Icon
              as={FaLinkedin}
              boxSize={10}
              color="blue.600"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)", color: "blue.800" }}
            />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SocialLinks;
