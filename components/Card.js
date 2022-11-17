import { useNavigation } from "@react-navigation/native";
import { Box, Image, Pressable, Text } from "native-base";
import React from "react";
import fallbackSource from "../assets/fallback-cover.jpg";

const Card = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigate("Details", {
          itemTitle: item?.title,
          itemImageUrl: item?.imgUrl,
          itemDescription: item?.body,
          itemCategory: item?.category,
          itemPublisher: item?.publisher,
          itemRelease: item?.release,
          itemISBN: item?.isbn,
        })
      }
      key={item?.id}
    >
      <Box
        marginRight={4}
        maxWidth={130}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        backgroundColor="gray.50"
      >
        <Image
          fallbackSource={fallbackSource}
          source={{ uri: item?.imgUrl }}
          alt={item?.title}
          height={200}
          width={130}
        />
      </Box>
      <Box marginTop={2}>
        <Text
          bold
          isTruncated
          maxWidth={130}
          color="coolGray.800"
          fontSize="sm"
        >
          {item?.title}
        </Text>
        <Text color={"yellow.600"} maxWidth={130} fontSize="sm">
          note: 3.2
        </Text>
        <Text maxWidth={130} fontSize="sm" color="coolGray.700">
          Subtitle
        </Text>
      </Box>
    </Pressable>
  );
};

export default Card;
