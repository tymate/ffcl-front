import React, { useState } from "react";
import { Box, Button, Center, Text, VStack } from "native-base";
import DatePicker from "@dietime/react-native-date-picker";

const StartSession = () => {
  const todayYear = new Date().getFullYear();

  const [date, setDate] = useState();

  return (
    <VStack space={4} margin={4} flex={1} justifyContent="center">
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
          What is the desired ending reading time for this session?{" "}
        </Text>
        <Text fontSize="md">
          Let's end this session on{" "}
          {date ? date.toDateString() : "Select date..."}
        </Text>
        <Box flexGrow={1} justifyContent="center">
          <DatePicker
            value={date}
            onChange={(value) => setDate(value)}
            format="yyyy-mm-dd"
            startYear={todayYear}
          />
        </Box>
        <Box flexGrow={1} justifyContent="flex-end" alignItems="flex-end">
          <Button
            borderRadius={14}
            width="full"
            size="lg"
            colorScheme="indigo"
            marginBottom={2}
          >
            <Text color="white" bold>
              start session
            </Text>
          </Button>
        </Box>
      </Box>
    </VStack>
  );
};

export default StartSession;
