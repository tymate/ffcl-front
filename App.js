import { NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "./providers/AuthProvider";
import RootNavigator from "./navigation/RootNavigator";
import GraphQLProvider from "./providers/GQLProvider";

export default function App() {
  return (
    <AuthProvider>
      <GraphQLProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NativeBaseProvider>
              <RootNavigator />
            </NativeBaseProvider>
          </GestureHandlerRootView>
        </SafeAreaView>
      </GraphQLProvider>
    </AuthProvider>
  );
}
