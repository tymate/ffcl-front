import React from "react";
import { Box, Button, Spinner, Text, useToast, VStack } from "native-base";
import * as ClipBoard from "expo-clipboard";

const ClubInvite = ({ route }) => {
  const toast = useToast();

  const invitationCode = route?.params?.invitationCode;

  return (
    <VStack space={4} margin={4} flex={1}>
      <Text bold fontSize="3xl">
        Invite friends
      </Text>

      <Text fontSize="md" color="coolGray.700">
        Copy the code above and share it with your friends.
      </Text>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>{invitationCode}</Text>
      </Box>

      <Button
        onPress={() => {
          ClipBoard.setStringAsync(invitationCode);
          toast.show({
            description: "The code is copied to your clipboard 👍",
          });
        }}
        borderRadius={14}
        width="full"
        size="lg"
        colorScheme="indigo"
        marginBottom={2}
      >
        <Text color="white" bold>
          Copy invitation code
        </Text>
      </Button>
    </VStack>
  );
};

export default ClubInvite;
