import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Iago Bortolon</Text>
          <Text color="gray.300" fontSize="small">
            iago_bortolon@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Iago Bortolon" src="/" />
    </Flex>
  );
}
