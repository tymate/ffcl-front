import React from "react";
import { Box, FormControl, Icon, Input, Text } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const JoinClub = ({ navigation }) => {
  return (
    <Box margin={4} flex="1">
      <Text marginBottom={2} onPress={() => navigation.goBack()}>
        <Icon
          ml="2"
          size="4"
          color="indigo.700"
          as={<MaterialCommunityIcons name="arrow-left" size={26} />}
        />
        Back
      </Text>
      <Text paddingBottom={4} bold fontSize="3xl">
        Join a club
      </Text>
      <Text maxWidth={400} fontSize="md" color="coolGray.700">
        Enter the invitation code provided by your friend. 6 digits.
      </Text>
      <FormControl>
        <FormControl.Label>Invitation code</FormControl.Label>
        <Input keyboardType="numeric" />
      </FormControl>
    </Box>
  );
};

export default JoinClub;
