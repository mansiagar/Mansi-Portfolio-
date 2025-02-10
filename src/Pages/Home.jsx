import "../style/animation.css";
import { Box, Text } from "@chakra-ui/react";

//import Navbar from "../Component/Navbar";
//import About from "./About";

const Home = () => {
  return (
    <div>
      <Box
        className="color-change-2x" // Animista animation
        maxW="100%" // Set max width
        h="600px"
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
          mt={100}
        >
          <Text
            className="focus-in"
            fontSize="3xl"
            fontWeight="bold"
            p={5}
            mt={10}
          >
            ✨Hi, I&apos;m Mansi Agrawal✨
          </Text>
          <Text className="focus-in" fontSize="3xl" fontWeight="bold" p={5}>
            A Passionate Front-End Developer 🚀
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
