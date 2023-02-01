import React from "react";
import { Box, Button, Slider, Stack, Text, VStack } from "native-base";
import ScrollPicker from "react-native-wheel-scrollview-picker";

const SliderSession = () => {
  const [onChangeValue, setOnChangeValue] = React.useState(5);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(5);
  return (
    <Box alignItems="center" w="100%">
      <Stack space={4} alignItems="center" w="75%" maxW="300">
        <Text textAlign="center">onChangeValue - {onChangeValue}</Text>
        <Text textAlign="center">onChangeEndValue - {onChangeEndValue}</Text>
        <Slider
          minValue={0}
          maxValue={50}
          defaultValue={70}
          colorScheme="indigo"
          onChange={(v) => {
            setOnChangeValue(Math.floor(v));
          }}
          onChangeEnd={(v) => {
            v && setOnChangeEndValue(Math.floor(v));
          }}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Stack>
    </Box>
  );
};

const StartSession = () => {
  return (
    <VStack space={4} margin={4} flex={1}>
      <Box flex="1">
        <Text paddingBottom={4} bold fontSize="3xl">
          Start a session
        </Text>
        <Text
          paddingBottom={4}
          maxWidth={400}
          fontSize="md"
          color="coolGray.700"
        >
          What is the desired reading time for this session?{" "}
        </Text>
        <SliderSession />
        <ScrollPicker
          dataSource={["1", "2", "3", "4", "5", "6"]}
          selectedIndex={1}
          renderItem={(data, index) => {
            //
          }}
          onValueChange={(data, selectedIndex) => {
            //
          }}
          wrapperHeight={180}
          wrapperWidth={150}
          wrapperColor="#FFFFFF"
          itemHeight={60}
          highlightColor="#d8d8d8"
          highlightBorderWidth={2}
        />
        <Box flexGrow={1} justifyContent="flex-end" alignItems="flex-end">
          <Button
            borderRadius={14}
            width="1/2"
            size="lg"
            color={"coolGray.200"}
          >
            <Text color={"white"} bold>
              start session
            </Text>
          </Button>
        </Box>
      </Box>
    </VStack>
  );
};

export default StartSession;
