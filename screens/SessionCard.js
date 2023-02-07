import { Box, HStack, Stack, Text, VStack } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { formatDistanceToNow } from "date-fns";

const SessionCard = ({ readDueDate, name }) => {
  return (
    <Box width="full" marginBottom={2} alignItems="center">
      <Box
        padding={4}
        width="full"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        backgroundColor="gray.50"
        borderWidth="1"
      >
        <Stack>
          <MaterialCommunityIcons name="book-clock" size={26} />
        </Stack>
        <Text color="black" fontSize="xl" bold>
          {name}
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <VStack alignItems="left">
            <Text color="coolGray.600" fontWeight="400">
              Reading due{" "}
              {formatDistanceToNow(new Date(readDueDate), {
                addSuffix: true,
              })}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default SessionCard;
