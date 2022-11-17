import { NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "./providers/AuthProvider";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NativeBaseProvider>
            <RootNavigator />
          </NativeBaseProvider>
        </GestureHandlerRootView>
      </SafeAreaView>
    </AuthProvider>
  );
}
