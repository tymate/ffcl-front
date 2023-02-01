import React, { useState } from "react";
import {
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  useToast,
  VStack,
} from "native-base";
import { GET_CLUBS, UPDATE_CLUB } from "../api/club";
import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";

const ClubEdit = ({ route }) => {
  const toast = useToast();
  const clubId = route?.params?.clubId;
  const [label, setLabel] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [updateClub] = useMutation(UPDATE_CLUB, {
    refetchQueries: [{ query: GET_CLUBS }, "currentUser"],
  });
  const { goBack } = useNavigation();

  const handleUpdateClub = async () => {
    setLoading(true);
    try {
      const ClubData = await updateClub({
        variables: {
          input: {
            clubId: clubId,
            label: label,
            description: description,
          },
        },
      });
      toast.show({
        description: "Club updated",
      });
      goBack();
    } catch (error) {
      toast.show({
        description: "Error: Unable to update a club",
      });
    }
    setLoading(false);
  };

  return (
    <VStack space={4} margin={4} flex={1}>
      <Text bold fontSize="3xl">
        Edit club
      </Text>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Club name</FormControl.Label>
          <Input
            variant="underlined"
            value={label}
            onChangeText={(text) => setLabel(text)}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Description</FormControl.Label>
          <Input
            variant="underlined"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </FormControl>
      </VStack>
      <HStack flex="1">
        <Button.Group alignItems={"flex-start"}>
          <Button variant="unstyled" onPress={() => goBack()}>
            <Text colorScheme="coolGray" bold>
              Cancel
            </Text>
          </Button>
          <Button
            onPress={handleUpdateClub}
            borderRadius={14}
            width="1/2"
            size="lg"
            colorScheme="indigo"
            disabled={label.length === 0}
            isLoading={loading}
          >
            <Text color={"white"} bold>
              Edit
            </Text>
          </Button>
        </Button.Group>
      </HStack>
    </VStack>
  );
};

export default ClubEdit;
