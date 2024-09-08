import { persistor, store } from "@/redux/store";
import * as firebase  from "@react-native-firebase/app";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export const unstable_settings = {
  initialRouteName: "Welcome",
};

export default function RootLayout() {
  //set up href for web
  useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.EXPO_PUBLIC_APIKEY || "",
      authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN || "",
      projectId: process.env.EXPO_PUBLIC_PROJECTID || "",
      storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET || "",
      messagingSenderId: process.env.EXPO_PUBLIC_MESSAGINGSENDERID || "",
      appId: process.env.EXPO_PUBLIC_APPID || "",
      measurementId: process.env.EXPO_PUBLIC_MEASUREMENTID || "",
      databaseURL: process.env.EXPO_PUBLIC_DATABASEURL || "",
    };

    if (Platform.OS === "web") {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="Welcome" options={{ headerShown: false }} />
            <Stack.Screen name="Test" options={{ headerShown: false }} />
            <Stack.Screen name="Submit" options={{ headerShown: false }} />
            <Stack.Screen name="PageFour" options={{ headerShown: false }} />
            <Stack.Screen name="PageFive" options={{ headerShown: false }} />
            <Stack.Screen name="PageSix" options={{ headerShown: false }} />
          </Stack>
      </PersistGate>
    </Provider>
  );
}
