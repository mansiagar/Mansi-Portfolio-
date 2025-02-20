import { Box, Button, Text, VStack, HStack } from "@chakra-ui/react";
import "../style/expreince.css";

const ExperienceCard = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="3xl" fontWeight="bold" p={5} color="blue.600">
          MY EXPERIENCE
        </Text>
      </Box>{" "}
      <div className="Certi_container">
        <Box
          bgGradient="linear(to-r, teal.500, blue.500)" // Gradient background
          color="black"
          p={8}
          borderRadius="2xl"
          boxShadow="xl" // 3D shadow effect
          maxW={{ base: "80vw", md: "xxl" }}
          h={{ base: "800px", md: "500px" }} // Set height for big box
          display="flex"
          flexDirection="column"
          _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }} // Hover effect
        >
          <VStack align="start" spacing={3} className="text">
            <Text fontSize="2xl" fontWeight="bold" className="text">
              🚀 Xenosis IT Solution
            </Text>
            <Text fontSize="md">
              Intern | Frontend Developer | Sep 2024 - Dec 2024
            </Text>

            <Text fontSize="xl" lineHeight={2} className="text">
              Worked on the <b>Resume Builder App</b> and{" "}
              <b>Engineer-StudyHub</b> as a Frontend Developer, focusing on
              creating <b>responsive</b> and <b>user-friendly</b> interfaces
              using
              <b>React.js</b> and <b>Ant Design</b>. Implemented{" "}
              <b>dynamic form handling</b>,<b>state management</b> using hooks,
              and enhanced UI/UX for better user engagement. Optimized{" "}
              <b>performance</b> by reducing unnecessary re-renders and
              improving
              <b>component reusability</b>. Worked on <b>API integration</b> to
              fetch and display data dynamically.
            </Text>

            {/* Tech Stack Tags */}
            <HStack spacing={2}>
              <Text color="blue">React.js ||</Text>
              <Text color="green">Ant Design||</Text>
              <Text color="purple">JavaScript</Text>
            </HStack>

            {/* View Certificate Button (opens in new tab) */}
            <a
              href="https://drive.google.com/file/d/1HLez99XADR8cIBBHzDuTjd4bClpiVjs_/view?usp=sharing"
              target="blank"
            >
              <Button
                className="Certi"
                hover={{ bg: " #19dcea" }}
                size="lg"
                w="full" // Full width button
                mt={5}
              >
                View Certificate →
              </Button>
            </a>
          </VStack>
        </Box>
      </div>
    </div>
  );
};

export default ExperienceCard;
