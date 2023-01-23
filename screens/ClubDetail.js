import React from "react";
import {
  Avatar,
  Box,
  Divider,
  FlatList,
  HStack,
  Icon,
  IconButton,
  Spinner,
  Text,
  VStack,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GET_CLUB } from "../api/club";
import { useQuery } from "@apollo/client";
import { deleteDuplicate, pluralize } from "../utils/mainUtils";

const ClubDetail = ({ route }) => {
  const clubId = route?.params?.clubId;
  const { navigate } = useNavigation();
  const { data, loading } = useQuery(GET_CLUB, {
    variables: { id: clubId },
  });
  const clubData = data?.club;
  const adminId = data?.club?.admin?.id;
  const totalOfusers = clubData?.users?.totalCount;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box margin={4} flex="1">
      <HStack justifyContent="space-between" alignItems="center">
        <Text bold fontSize="3xl">
          {clubData?.label}
        </Text>
        <IconButton
          onPress={() => navigate("ClubOptions", { clubDetails: clubData })}
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
      <Divider marginY="5" />
      <Text bold fontSize="2xl">
        {pluralize(totalOfusers, "Member", "s", false)}
      </Text>
      <FlatList
        data={deleteDuplicate(clubData?.users?.nodes, "id")} //TODO ask api to send unique key for club users
        renderItem={({ item }) => (
          <TouchableOpacity>
            <HStack
              paddingTop={3}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <HStack alignItems="center">
                <Avatar
                  borderColor={"indigo.500"}
                  borderWidth={adminId === item.id ? 2 : 0}
                  bg="indigo.500"
                  source={{
                    uri: "https://picsum.photos/200/300?random=1",
                  }}
                >
                  JB
                </Avatar>
                <VStack paddingLeft={2}>
                  <Text>{item?.username}</Text>
                  {adminId === item.id && <Text>admin</Text>}
                </VStack>
              </HStack>
              <HStack>
                <IconButton
                  onPress={() => console.log("hello")}
                  icon={
                    <Icon
                      size="7"
                      as={<MaterialCommunityIcons name="chevron-right" />}
                      name="emoji-happy"
                      color={"black"}
                    />
                  }
                />
              </HStack>
            </HStack>
            <Divider marginY="5" />
          </TouchableOpacity>
        )}
      />
    </Box>
  );
};

export default ClubDetail;
