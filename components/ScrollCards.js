import React from "react";
import { Box, ScrollView, Text } from "native-base";
import Card from "./Card";

const ScrollCards = ({ data, title, item }) => {
  return (
    <Box>
      <Text paddingBottom={4} paddingTop={4} bold fontSize="xl">
        {title}
      </Text>
      <ScrollView horizontal>
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </ScrollView>
    </Box>
  );
};

export default ScrollCards;
