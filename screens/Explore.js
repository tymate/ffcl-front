import React, { useEffect, useState } from "react";
import {
  Box,
  FlatList,
  HStack,
  Icon,
  Image,
  Input,
  Spinner,
  Text,
  VStack,
} from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { search } from "../api/googleBook";
import { useDebounce } from "use-debounce";
import { useNavigation } from "@react-navigation/native";

const SearchListItem = ({ data }) => {
  const { navigate } = useNavigation();
  const volumeInfo = data?.item?.volumeInfo;

  return (
    <TouchableOpacity
      onPress={() => navigate("Details", { id: data?.item?.id })}
    >
      <HStack space={4}>
        {volumeInfo?.imageLinks?.thumbnail === undefined ? (
          <VStack
            h={160}
            w={100}
            backgroundColor="gray.200"
            borderRadius={10}
            alignItems="center"
            justifyContent="center"
            p={2}
          >
            <Text textAlign="center">{volumeInfo?.title}</Text>
            <Text textAlign="center" color="gray.400">
              {volumeInfo?.authors}
            </Text>
          </VStack>
        ) : (
          <Image
            h={160}
            w={100}
            source={{ uri: volumeInfo?.imageLinks?.thumbnail }}
            alt={"Cover"}
            borderRadius={10}
          />
        )}
        <VStack flex={1}>
          <Text>{volumeInfo?.title}</Text>
          <Text>{volumeInfo?.authors}</Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

const Explore = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [debounced] = useDebounce(value, 1000);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (value !== "") handleSearch();
    else setSearchResult([]);
  }, [debounced]);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const { data } = await search({ text: debounced });
      setSearchResult(data?.items);
    } catch (err) {}
    setIsLoading(false);
  };

  return (
    <VStack space={4} mb={0} m={4} flex={1}>
      <Text bold fontSize="3xl">
        Explore
      </Text>
      <Input
        focusOutlineColor={"purple.800"}
        borderColor={"gray.400"}
        alignSelf={"center"}
        backgroundColor={"gray.300"}
        placeholder="Search"
        variant="filled"
        width="100%"
        borderRadius="10"
        p="2"
        clearButtonMode="always"
        InputLeftElement={
          <Icon
            ml="2"
            size="4"
            color="gray.400"
            as={<MaterialCommunityIcons name="magnify" size={26} />}
          />
        }
        InputRightElement={isLoading ? <Spinner size="sm" pr={1} /> : null}
        onChangeText={setValue}
      />
      <FlatList
        data={searchResult}
        renderItem={(item) => <SearchListItem data={item} />}
        ItemSeparatorComponent={() => (
          <Box my={1} h="1px" w="100%" backgroundColor="gray.200" />
        )}
        ListEmptyComponent={
          isLoading ? (
            <Spinner />
          ) : (
            <Text>{debounced === "" ? "C'est parti" : "empty"}</Text>
          )
        }
      />
    </VStack>
  );
};

export default Explore;
