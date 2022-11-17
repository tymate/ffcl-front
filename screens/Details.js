import React from "react";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "native-base";
import fallbackSource from "../assets/fallback-cover.jpg";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Details = ({ route, navigation }) => {
  const {
    itemTitle,
    itemImageUrl,
    itemDescription,
    itemCategory,
    itemPublisher,
    itemRelease,
    itemISBN,
  } = route.params;
  return (
    <Box margin={4} flex="1">
      <Text marginBottom={4} onPress={() => navigation.goBack()}>
        <Icon
          ml="2"
          size="4"
          color="indigo.700"
          as={<MaterialCommunityIcons name="arrow-left" size={26} />}
        />
        Back
      </Text>
      <Flex direction="row" alignItems={"center"}>
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
            source={{ uri: itemImageUrl }}
            alt={itemTitle}
            height={200}
            width={130}
          />
        </Box>
        <Box marginLeft={4}>
          <Text maxWidth={170} bold color="coolGray.800" fontSize="xl">
            {itemTitle}
          </Text>
          <Text color={"yellow.600"} maxWidth={130} fontSize="sm">
            note: 3.2
          </Text>
          <Text maxWidth={130} fontSize="sm" color="coolGray.700">
            Subtitle
          </Text>
        </Box>
      </Flex>
      <Divider my={4} />
      <Text paddingBottom={1} bold fontSize="xl">
        Description
      </Text>
      <Text maxWidth={400} fontSize="md" color="coolGray.700">
        {itemDescription}
      </Text>
      <Divider my={4} />
      <VStack space={3} w="100%">
        <HStack paddingBottom={4} justifyContent="space-between">
          <Text color="coolGray.700">Category</Text>
          <Text>{itemCategory}</Text>
        </HStack>
        <HStack paddingBottom={4} justifyContent="space-between">
          <Text color="coolGray.700">Publisher</Text>
          <Text>{itemPublisher}</Text>
        </HStack>
        <HStack paddingBottom={4} justifyContent="space-between">
          <Text color="coolGray.700">Release date</Text>
          <Text>{itemRelease}</Text>
        </HStack>
        <HStack paddingBottom={4} justifyContent="space-between">
          <Text color="coolGray.700">ISBN</Text>
          <Text>{itemISBN}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Details;
