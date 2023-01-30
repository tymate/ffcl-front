import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import fallbackSource from "../assets/fallback-cover.jpg";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { getBook } from "../api/googleBook";
import WebView from "react-native-webview";

const Details = ({ route }) => {
  const { goBack } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [book, setBook] = useState();

  const { id } = route.params;

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { data } = await getBook({ id: id });
      setBook(data);
    } catch (err) {}
    setIsLoading(false);
  };

  return (
    <ScrollView flex={1}>
      <VStack margin={4} space={4} flex={1}>
        <HStack alignItems="center" space={4} flex={1}>
          <Box
            maxWidth={130}
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            backgroundColor="gray.50"
          >
            <Image
              fallbackSource={fallbackSource}
              source={{ uri: book?.volumeInfo?.imageLinks?.thumbnail }}
              alt="cover"
              height={200}
              width={130}
            />
          </Box>
          <VStack flex={1}>
            <Text bold color="coolGray.800" fontSize="xl">
              {book?.volumeInfo?.title}
            </Text>
            <Text fontSize="sm" color="yellow.600">
              {book?.volumeInfo?.subtitle}
            </Text>
          </VStack>
        </HStack>
        <Divider />
        <Text bold fontSize="xl">
          Description
        </Text>
        <Text color="coolGray.700">{book?.volumeInfo?.description}</Text>
        <Divider />
        <VStack space={4} flex={1}>
          <HStack space={4} justifyContent="space-between" flex={1}>
            <Text color="coolGray.700">Category</Text>
            <Text>{book?.volumeInfo?.categories}</Text>
          </HStack>
          <HStack space={4} justifyContent="space-between" flex={1}>
            <Text color="coolGray.700">Publisher</Text>
            <Text>{book?.volumeInfo?.publisher}</Text>
          </HStack>
          <HStack space={4} justifyContent="space-between" flex={1}>
            <Text color="coolGray.700">Release date</Text>
            <Text>{book?.volumeInfo?.publishedDate}</Text>
          </HStack>
          <HStack space={4} justifyContent="space-between" flex={1}>
            <Text color="coolGray.700">ISBN</Text>
            <Text>{book?.volumeInfo?.industryIdentifiers[0]?.identifier}</Text>
          </HStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Details;
