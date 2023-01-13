import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  useToast,
  VStack,
} from "native-base";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../api/auth";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [register] = useMutation(CREATE_USER);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { goBack } = useNavigation();

  const handleRegister = async () => {
    setLoading(true);
    try {
      const data = await register({
        variables: {
          input: {
            username: username,
            email: email,
            password: password,
          },
        },
      });
      goBack();
      toast.show({
        description: "A confirmation email has been sent",
      });
    } catch (error) {
      toast.show({
        description: "Error: Unable to create a user",
      });
    }
    setLoading(false);
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <Box
      backgroundColor={"white"}
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            fontWeight="semibold"
          >
            Sign up to continue!
          </Heading>
          <Box size={4} />
          <VStack space={3}>
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                onSubmitEditing={() => {
                  emailRef?.current?.focus();
                }}
                blurOnSubmit={false}
                returnKeyType="next"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </FormControl>
            <FormControl type="email">
              <FormControl.Label>Email</FormControl.Label>
              <Input
                ref={emailRef}
                onSubmitEditing={() => {
                  passwordRef?.current?.focus();
                }}
                returnKeyType="next"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                onSubmitEditing={handleRegister}
                ref={passwordRef}
                returnKeyType="done"
                value={password}
                onChangeText={(text) => setPassword(text)}
                type="password"
                keyboardType="visible-password"
              />
            </FormControl>
            <Box size={1} />
            <Button
              isLoading={loading}
              onPress={handleRegister}
              borderRadius={14}
              colorScheme="indigo"
            >
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default SignUp;
