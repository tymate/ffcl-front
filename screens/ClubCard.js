import { Avatar, Box, Circle, HStack, Stack, Text, VStack } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

const ClubCard = ({ label, description }) => {
  return (
    <Box width={"full"} marginBottom={2} alignItems="center">
      <Box
        padding={4}
        width={"full"}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        backgroundColor="gray.50"
        borderWidth="1"
      >
        <Stack>
          <MaterialCommunityIcons name="book-open-page-variant" size={26} />
        </Stack>
        <Text fontWeight="400">{description}</Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <VStack alignItems="left">
            <Text color="coolGray.600" fontWeight="400">
              {1} MEMBER
            </Text>
            <Text color={"black"} fontSize="xl" bold>
              {label}
            </Text>
          </VStack>
          <Avatar
            bg="indigo.500"
            source={{
              uri: "https://picsum.photos/200/300?random=2",
            }}
          >
            JB
          </Avatar>
        </HStack>
      </Box>
    </Box>
  );
};

export default ClubCard;
