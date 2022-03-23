import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Iago Bortolon</Text>
        <Text color="gray.300" fontSize="small">
          iago_bortolon@hotmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Iago Bortolon" src="/" />
    </Flex>
  );
}
