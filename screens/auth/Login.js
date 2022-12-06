import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  HStack,
  Link,
  useToast,
  VStack,
  Text,
} from "native-base";
import { login } from "../../api/auth";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const { navigate } = useNavigation();
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const { setToken } = useContext(AuthContext);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const { data } = await login({ username, password });
      setToken(data);
    } catch (err) {
      toast.show({
        description: "Erreur",
      });
    }
    setIsLoading(false);
  };

  return (
    <Box
      backgroundColor={"white"}
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800">
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input
                value={username}
                onChangeText={(text) => setUsername(text)}
                type="email-address"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                value={password}
                onChangeText={(text) => setPassword(text)}
                type="password"
              />
            </FormControl>
            <Button
              isLoading={isLoading}
              borderRadius={14}
              onPress={handleLogin}
              mt="2"
              colorScheme="indigo"
            >
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                I'm a new user.{" "}
              </Text>
              <Link
                onPress={() => navigate("SignUp")}
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
              >
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Login;
