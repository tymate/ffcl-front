import React from "react";
import {
  Button,
  Center,
  FlatList,
  Image,
  Spinner,
  Text,
  VStack,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { USER } from "../api/auth";
import { GET_CLUBS } from "../api/club";
import { useQuery } from "@apollo/client";
import ClubItem from "./ClubItem";

const MyClubs = () => {
  const { navigate } = useNavigation();
  const { data: user } = useQuery(USER);
  const { data: userData, loading } = useQuery(GET_CLUBS);

  const currentUser = user?.currentUser;
  const allClubs = userData?.currentUser?.clubs?.nodes;
  const isClubs = Boolean(allClubs?.length !== 0);

  if (loading)
    return (
      <Center flexGrow={1}>
        <Spinner />
      </Center>
    );

  return (
    <FlatList
      data={allClubs}
      ListHeaderComponent={() => {
        return (
          isClubs && (
            <Text padding={4} bold fontSize="3xl">
              My clubs
            </Text>
          )
        );
      }}
      ListFooterComponent={() => (
        <VStack padding={4}>
          <Button
            onPress={() => navigate("JoinClub")}
            borderRadius={14}
            width="full"
            size="lg"
            colorScheme="indigo"
            marginBottom={2}
          >
            <Text color="white" bold>
              Join a club
            </Text>
          </Button>
          <Button
            onPress={() => navigate("CreateClub")}
            borderRadius={14}
            width="full"
            size="lg"
            backgroundColor="gray.200"
          >
            <Text color="black" bold>
              Create a club
            </Text>
          </Button>
        </VStack>
      )}
      ListEmptyComponent={() => (
        <VStack alignItems="center">
          <Image
            source={require("../assets/adaptive-icon.png")}
            alt="Alternate Text"
            size="2xl"
            resizeMode="contain"
          />
          <Text paddingBottom={4} bold fontSize="3xl">
            Welcome {currentUser?.username}
          </Text>
          <Text
            textAlign="center"
            maxWidth={200}
            fontSize="sm"
            color="coolGray.800"
            paddingBottom={4}
          >
            Create or join your first book club and start reading!
          </Text>
        </VStack>
      )}
      renderItem={({ item }) => (
        <ClubItem description={item?.description} label={item?.label} />
      )}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyClubs;
