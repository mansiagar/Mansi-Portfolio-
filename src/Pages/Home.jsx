import "../style/animation.css";
import { Box, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Box
        maxW="100%" // Set max width
        h="700px"
        p={8}
        boxShadow="lg"
        borderRadius="lg"
        bg="#1E3A8A"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={100}
        >
          <Text
            className="focus-in"
            fontSize="3xl"
            fontWeight="bold"
            p={5}
            mt={10}
            color={"white"}
          >
            ✨HI, I&apos;M MANSI AGARWAL✨
          </Text>
          <Text
            className="focus-in"
            color={"white"}
            fontSize="3xl"
            fontWeight="bold"
            p={5}
          >
            A PASSIONATE FRONT END DEVELOPER 🚀
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
