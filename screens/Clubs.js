import React from "react";
import { Box, Button, Center, Image, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Clubs = () => {
  const { navigate } = useNavigation();

  return (
    <Box
      backgroundColor={"white"}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Center padding={4} width={"full"} maxW="290">
        <Image
          source={require("../assets/adaptive-icon.png")}
          alt="Alternate Text"
          size={"2xl"}
          resizeMode={"contain"}
        />
        <Text paddingBottom={4} bold fontSize="3xl">
          Hey! Welcome
        </Text>
        <Text
          textAlign={"center"}
          maxWidth={200}
          fontSize="sm"
          color="coolGray.800"
          paddingBottom={4}
        >
          Create or join your first book club and start reading!
        </Text>
        <Button
          onPress={() => navigate("JoinClub")}
          borderRadius={14}
          width={"full"}
          size="lg"
          colorScheme="indigo"
          marginBottom={2}
        >
          <Text color={"white"} bold>
            Join a club
          </Text>
        </Button>
        <Button
          onPress={() => navigate("CreateClub")}
          borderRadius={14}
          width={"full"}
          size="lg"
          backgroundColor={"gray.200"}
        >
          <Text color={"black"} bold>
            Create a club
          </Text>
        </Button>
      </Center>
    </Box>
  );
};

export default Clubs;
