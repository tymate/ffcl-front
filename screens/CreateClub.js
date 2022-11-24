import React from "react";
import {
  Box,
  Button,
  FormControl,
  Icon,
  Input,
  Text,
  VStack,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CreateClub = ({ navigation }) => {
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
        <Input variant="underlined" />
      </FormControl>
      <Box flexGrow={1} justifyContent="flex-end" alignItems="flex-end">
        <Button
          onPress={() => console.log("CreateClub")}
          borderRadius={14}
          width="1/2"
          size="lg"
          color={"coolGray.200"}
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
