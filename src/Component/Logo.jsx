import { Avatar, HStack } from "@chakra-ui/react";

const Logo = () => {
  return (
    <HStack>
      <Avatar.Root colorPalette="teal">
        <Avatar.Fallback name="Mansi Agarwal" />
        <Avatar.Image src="https://bit.ly/broken-link" />
      </Avatar.Root>
    </HStack>
  );
};
export default Logo;
