import React, { useState } from "react";
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
        description: "Un mail de confirmation vous a été envoyé",
      });
    } catch (error) {
      toast.show({
        description:
          "Il y a eu une erreur lors de la création de l'utilisateur",
      });
    }
    setLoading(false);
  };

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
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </FormControl>
            <FormControl type="email">
              <FormControl.Label>Email</FormControl.Label>
              <Input value={email} onChangeText={(text) => setEmail(text)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                value={password}
                onChangeText={(text) => setPassword(text)}
                type="password"
              />
            </FormControl>
            {/* <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input type="password" />
            </FormControl> */}
            <Button
              isLoading={loading}
              onPress={handleRegister}
              borderRadius={14}
              mt="2"
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
