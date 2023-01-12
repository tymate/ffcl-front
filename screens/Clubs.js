import React from "react";
import {
  Box,
  Button,
  Center,
  Circle,
  HStack,
  Image,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { USER } from "../api/auth";
import { GET_CLUBS } from "../api/club";
import { useQuery } from "@apollo/client";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Clubs = () => {
  const { navigate } = useNavigation();
  const { data: user } = useQuery(USER);
  const { data: clubsData } = useQuery(GET_CLUBS);

  const currentUser = user?.currentUser;
  const allClubs = clubsData?.clubs?.nodes;
  const isClubs = Boolean(allClubs?.length !== 0);

  return (
    <ScrollView flex={1}>
      <Center padding={4} width={"full"}>
        {!isClubs && (
          <Image
            source={require("../assets/adaptive-icon.png")}
            alt="Alternate Text"
            size={"2xl"}
            resizeMode={"contain"}
          />
        )}
        {!isClubs ? (
          <Text paddingBottom={4} bold fontSize="3xl">
            Welcome {currentUser?.username}
          </Text>
        ) : (
          <Text paddingBottom={4} bold fontSize="3xl">
            My clubs
          </Text>
        )}
        {!isClubs && (
          <Text
            textAlign={"center"}
            maxWidth={200}
            fontSize="sm"
            color="coolGray.800"
            paddingBottom={4}
          >
            Create or join your first book club and start reading!
          </Text>
        )}
        {allClubs?.map((node) => (
          <Box width={"full"} marginBottom={2} alignItems="center">
            <Box
              padding={4}
              width={"full"}
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              backgroundColor="gray.50"
              borderWidth="1"
            >
              <Stack>
                <MaterialCommunityIcons
                  name="book-open-page-variant"
                  size={26}
                />
              </Stack>
              <Text fontWeight="400">Une superbe description du club</Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <VStack alignItems="left">
                  <Text color="coolGray.600" fontWeight="400">
                    6 MEMBERS
                  </Text>
                  <Text color={"black"} fontSize="xl" bold>
                    {node?.label}
                  </Text>
                </VStack>
                <Circle size={34} backgroundColor="blueGray.600" />
              </HStack>
            </Box>
          </Box>
        ))}

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
    </ScrollView>
  );
};

export default Clubs;
