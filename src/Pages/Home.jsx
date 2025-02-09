import "../style/animation.css"; // Import Animista animations
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../Component/Navbar"; // Make sure your Navbar component is correctly imported

const Home = () => {
  return (
    <Box
      className="color-change-2x" // Animista animation
      maxW="100%" // Set max width
      h="600px"
      // mx="auto" // Center the box horizontally
      p={8} // Add padding inside the container
      boxShadow="lg" // Add shadow for depth
      borderRadius="lg" // Rounded corners
      bg="gray.100" // Light background
    >
      <Navbar />
      <Box
        display="flex" // Use flexbox for alignment
        flexDirection="column" // Stack items vertically
        justifyContent="center" // Center content vertically
        alignItems="center" // Center content horizontally
        mt={100}
      >
        <Text className="focus-in" fontSize="3xl" fontWeight="bold">
          Welcome to my portfolio✨
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
