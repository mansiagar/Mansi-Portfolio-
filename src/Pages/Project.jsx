import { Box, Text } from "@chakra-ui/react";
const Project = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="3xl" fontWeight="bold" p={5}>
          My PROJECTS
        </Text>
      </Box>
    </div>
  );
};

export default Project;
