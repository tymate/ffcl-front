import React, { useRef, useState } from "react";
import {
  AlertDialog,
  Button,
  Divider,
  HStack,
  Icon,
  Text,
  useToast,
  VStack,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DELETE_CLUB, GET_CLUBS, UPDATE_CLUB } from "../api/club";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { USER } from "../api/auth";

const ClubOptions = ({ route }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);
  const toast = useToast();
  const { navigate } = useNavigation();

  const { data: user } = useQuery(USER);

  const clubDetailsData = route?.params?.clubDetails;
  const clubId = clubDetailsData?.id;
  const adminId = clubDetailsData?.admin?.id;
  const currentUserId = user?.currentUser?.id;
  const isAdmin = Boolean(adminId === currentUserId);

  const [deleteClub] = useMutation(DELETE_CLUB, {
    refetchQueries: [{ query: GET_CLUBS }, "currentUser"],
  });

  const handleDeleteClub = async () => {
    setLoading(true);
    try {
      const ClubData = await deleteClub({
        variables: {
          input: {
            clubId: clubId,
          },
        },
      });
      navigate("Home");
    } catch (errors) {
      toast.show({
        description: "Error: Unable to delete a club",
      });
    }
    setLoading(false);
  };

  return (
    <VStack space={4} margin={4} flex={1}>
      <Text bold fontSize="3xl">
        Settings
      </Text>
      <Text maxWidth={400} fontSize="md" color="coolGray.700">
        A bunch of settings for your club
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigate("ClubInvite", {
            invitationCode: clubDetailsData?.invitationCode,
          })
        }
      >
        <HStack padding={3} alignItems="center" justifyContent="space-between">
          <HStack alignItems="center">
            <Icon
              size="7"
              as={<MaterialCommunityIcons name="account-multiple-plus" />}
              name="delete"
            />
            <Text paddingLeft={2} fontSize="md">
              Invite friend
            </Text>
          </HStack>
          <HStack>
            <Icon
              size="7"
              as={<MaterialCommunityIcons name="chevron-right" />}
              name="chevron-right"
            />
          </HStack>
        </HStack>
      </TouchableOpacity>
      {isAdmin && (
        <TouchableOpacity
          onPress={() =>
            navigate("ClubEdit", {
              clubId: clubId,
            })
          }
        >
          <HStack
            padding={3}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack alignItems="center">
              <Icon
                size="7"
                as={<MaterialCommunityIcons name="book-edit" />}
                name="delete"
              />
              <Text paddingLeft={2} fontSize="md">
                Edit club
              </Text>
            </HStack>
            <HStack>
              <Icon
                size="7"
                as={<MaterialCommunityIcons name="chevron-right" />}
                name="chevron-righ"
              />
            </HStack>
          </HStack>
        </TouchableOpacity>
      )}
      {isAdmin && (
        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
          <HStack
            backgroundColor="red.100"
            padding={3}
            alignItems="center"
            justifyContent="space-between"
            borderRadius={4}
          >
            <HStack alignItems="center">
              <Icon
                size="7"
                as={<MaterialCommunityIcons name="delete" />}
                name="delete"
                color="red.600"
              />
              <Text color="red.600" paddingLeft={2} fontSize="md">
                Delete club
              </Text>
            </HStack>
            <HStack>
              <Icon
                size="7"
                as={<MaterialCommunityIcons name="chevron-right" />}
                name="emoji-happy"
                color="red.600"
              />
            </HStack>
          </HStack>
          <Divider marginY="2" />
        </TouchableOpacity>
      )}

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Sure you want to delete?</AlertDialog.Header>
          <AlertDialog.Body>
            This will remove all data relating to the club. This action cannot
            be reversed. Deleted data can not be recovered.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button
                isLoading={loading}
                colorScheme="danger"
                onPress={handleDeleteClub}
              >
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </VStack>
  );
};

export default ClubOptions;
