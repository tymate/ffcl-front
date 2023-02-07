import React, { useState } from "react";
import { Box, Button, Text, useToast, VStack } from "native-base";
import DatePicker from "@dietime/react-native-date-picker";
import { CREATE_SESSION } from "../api/sessions";
import { GET_CLUBS } from "../api/club";
import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";

const StartSession = ({ route }) => {
  const todayYear = new Date().getFullYear();

  const [date, setDate] = useState();
  const [subDate, setSubDate] = useState();
  const [loading, setLoading] = useState();
  const toast = useToast();
  const { goBack } = useNavigation();

  const clubDetailsData = route?.params?.clubDetails;
  const clubId = clubDetailsData?.id;
  console.log(route);

  const [createReadingSession] = useMutation(CREATE_SESSION, {
    refetchQueries: [{ query: GET_CLUBS }, "currentUser"],
  });

  const handleCreateSession = async () => {
    setLoading(true);
    try {
      const CreateSession = await createReadingSession({
        variables: {
          input: {
            clubId: clubId,
            name: "salut",
            readDueDate: date,
            submissionDueDate: subDate,
          },
        },
      });
      console.log(CreateSession);
      goBack();
    } catch (error) {
      console.log(error);
      toast.show({
        description: "Error: Unable to create a session",
      });
    }
    setLoading(false);
  };

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
        <Box>
          <DatePicker
            value={subDate}
            onChange={(value) => setSubDate(value)}
            format="yyyy-mm-dd"
            startYear={todayYear}
          />
          <DatePicker
            value={date}
            onChange={(value) => setDate(value)}
            format="yyyy-mm-dd"
            startYear={todayYear}
          />
        </Box>

        <Box>
          <Button
            onPress={handleCreateSession}
            borderRadius={14}
            width="full"
            size="lg"
            colorScheme="indigo"
            marginBottom={2}
            isLoading={loading}
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
