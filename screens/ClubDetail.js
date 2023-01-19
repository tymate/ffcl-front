import React from "react";
import { Box, HStack, Icon, IconButton, Text } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ClubDetail = ({ navigation, route }) => {
  const clubData = route?.params.club;

  return (
    <Box margin={4} flex="1">
      <Text
        color="indigo.700"
        marginBottom={2}
        onPress={() => navigation.goBack()}
      >
        <Icon
          ml="2"
          size="4"
          color="indigo.700"
          as={<MaterialCommunityIcons name="chevron-left" />}
        />
        Back
      </Text>
      <HStack>
        <Text bold fontSize="3xl">
          {clubData?.label}
        </Text>
        <IconButton
          size="8"
          icon={
            <Icon
              size="4"
              as={<MaterialCommunityIcons name="cog" />}
              name="emoji-happy"
              color={"black"}
            />
          }
          backgroundColor="gray.100"
          borderRadius="full"
        />
      </HStack>
      <Text maxWidth={400} fontSize="md" color="coolGray.700">
        Une super description
      </Text>
    </Box>
  );
};

export default ClubDetail;
