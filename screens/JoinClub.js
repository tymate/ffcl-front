import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  useToast,
  VStack,
} from "native-base";
import { GET_CLUBS, JOIN_CLUB } from "../api/club";
import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";

const JoinClub = ({ navigation }) => {
  const [invitationCode, setCode] = useState("");

  const [joinClub] = useMutation(JOIN_CLUB, {
    refetchQueries: [{ query: GET_CLUBS }, "currentUser"],
  });
  const { goBack } = useNavigation();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleJoinClub = async () => {
    setLoading(true);
    try {
      const ClubData = await joinClub({
        variables: {
          input: {
            invitationCode,
          },
        },
      });

      goBack();
    } catch (error) {
      toast.show({
        description: "Error: Unable to join a club",
      });
    }
    setLoading(false);
  };

  return (
    <VStack space={4} margin={4} flex={1}>
      <Box flex="1">
        <Text paddingBottom={4} bold fontSize="3xl">
          Join a club
        </Text>
        <Text
          paddingBottom={4}
          maxWidth={400}
          fontSize="md"
          color="coolGray.700"
        >
          Enter the invitation code provided by your friend. 6 digits.
        </Text>
        <FormControl>
          <FormControl.Label>Invitation Code</FormControl.Label>
          <Input
            variant="underlined"
            value={invitationCode}
            onChangeText={(text) => setCode(text)}
          />
        </FormControl>
        <Box flexGrow={1} justifyContent="flex-end" alignItems="flex-end">
          <Button
            onPress={handleJoinClub}
            borderRadius={14}
            width="1/2"
            size="lg"
            color={"coolGray.200"}
            isLoading={loading}
          >
            <Text color={"white"} bold>
              join a club
            </Text>
          </Button>
        </Box>
      </Box>
    </VStack>
  );
};

export default JoinClub;
