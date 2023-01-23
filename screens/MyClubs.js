import React from "react";
import { Button, FlatList, Image, Spinner, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { USER } from "../api/auth";
import { GET_CLUBS } from "../api/club";
import { useQuery } from "@apollo/client";
import ClubCard from "./ClubCard";
import { TouchableOpacity } from "react-native";
import { deleteDuplicate, pluralize } from "../utils/mainUtils";

const MyClubs = () => {
  const { navigate } = useNavigation();
  const { data: user } = useQuery(USER);
  const { data: userData, loading } = useQuery(GET_CLUBS);

  const currentUser = user?.currentUser;
  const allClubs = userData?.currentUser?.clubs?.edges.map((edge) => edge.node);
  const isClubs = Boolean(allClubs?.length !== 0);
  const totalOfClubs = userData?.currentUser?.totalCount;

  return (
    <FlatList
      data={deleteDuplicate(allClubs, "id")} //TODO ask api to send unique key for clubs data
      ListHeaderComponent={() => {
        return (
          isClubs && (
            <Text padding={4} bold fontSize="3xl">
              {pluralize(totalOfClubs, "My club")}
            </Text>
          )
        );
      }}
      ListFooterComponent={() => (
        <VStack padding={4}>
          {loading && <Spinner />}
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
        <TouchableOpacity
          onPress={() => navigate("ClubDetail", { clubId: item?.id })}
        >
          <ClubCard
            totalOfusers={item?.users?.totalCount}
            description={item?.description}
            label={item?.label}
          />
        </TouchableOpacity>
      )}
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 12,
      }}
      ListFooterComponentStyle={{
        justifyContent: isClubs ? "flex-end" : "none",
        flex: 1,
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyClubs;
