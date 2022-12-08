import React from "react";
import data from "../data";
import { Box, Icon, Input, ScrollView, Text } from "native-base";
import { Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ScrollCards from "../components/ScrollCards";

export const SLIDER_WIDTH = Dimensions.get("window").width;

const Explore = () => {
  return (
    <ScrollView paddingLeft={4} vertical>
      <Text paddingBottom={4} bold fontSize="3xl">
        Explore
      </Text>
      <Box paddingRight={4}>
        <Input
          focusOutlineColor={"purple.800"}
          borderColor={"gray.400"}
          alignSelf={"center"}
          backgroundColor={"gray.300"}
          placeholder="Search"
          variant="filled"
          width="100%"
          borderRadius="10"
          py="2"
          px="2"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<MaterialCommunityIcons name="magnify" size={26} />}
            />
          }
        />
      </Box>
      <ScrollCards title={"This week"} data={data[0]} />
      <ScrollCards title={"This month"} data={data[1]} />
      <ScrollCards title={"This year"} data={data[2]} />
    </ScrollView>
  );
};

export default Explore;
