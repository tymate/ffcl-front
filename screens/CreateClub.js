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
import { useMutation } from "@apollo/client";
import { CREATE_CLUB } from "../api/club";
import { useNavigation } from "@react-navigation/native";

const CreateClub = ({ navigation }) => {
  const [label, setLabel] = useState("");
  const [loading, setLoading] = useState(false);
  const [createClub] = useMutation(CREATE_CLUB);
  const toast = useToast();
  const { goBack } = useNavigation();

  const handleCreateClub = async () => {
    setLoading(true);
    try {
      const ClubData = await createClub({
        variables: {
          input: {
            label: label,
            description: "",
          },
        },
      });
      console.log(ClubData);
      goBack();
    } catch (error) {
      toast.show({
        description: "Error: Unable to create a club",
      });
    }
    setLoading(false);
  };

  return (
    <VStack space={4} margin={4} flex={1}>
      <Text bold fontSize="3xl">
        Create a club
      </Text>
      <Text maxWidth={400} fontSize="md" color="coolGray.700">
        Enter a name for your club, and remember, it’s not a poney club.{" "}
      </Text>
      <FormControl>
        <FormControl.Label>Club Name</FormControl.Label>
        <Input
          variant="underlined"
          value={label}
          onChangeText={(text) => setLabel(text)}
        />
      </FormControl>
      <Box flexGrow={1} justifyContent="flex-end" alignItems="flex-end">
        <Button
          onPress={handleCreateClub}
          borderRadius={14}
          width="1/2"
          size="lg"
          color={"coolGray.200"}
          disabled={label.length === 0}
          isLoading={loading}
        >
          <Text color={"white"} bold>
            Create a club
          </Text>
        </Button>
      </Box>
    </VStack>
  );
};

export default CreateClub;
