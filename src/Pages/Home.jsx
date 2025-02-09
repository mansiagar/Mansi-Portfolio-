import "../style/animation.css"; // Import the animation styles
import { Box, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Box textAlign="center" mt={10} className="color-change-2x">
        <Text className="focus-in" fontSize="3xl" fontWeight="bold">
          Welcome to My Portfolio ✨
        </Text>
      </Box>
    </div>
  );
};

export default Home;
