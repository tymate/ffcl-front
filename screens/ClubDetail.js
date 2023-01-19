import React from "react";
import {
  Avatar,
  Box,
  Divider,
  HStack,
  Icon,
  IconButton,
  Text,
} from "native-base";
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
      <HStack justifyContent="space-between" alignItems="center">
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
      <Divider marginY="2" />
      <Text bold fontSize="2xl">
        Member
      </Text>
      <HStack paddingTop={3} alignItems="center">
        <Avatar
          bg="indigo.500"
          source={{
            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        >
          JB
          {console.log(clubData?.admin?.username)}
        </Avatar>
        <Text padding={3}>{clubData?.admin?.username}</Text>
      </HStack>
    </Box>
  );
};

export default ClubDetail;
