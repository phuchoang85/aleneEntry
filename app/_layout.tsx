import { persistor, store } from "@/redux/store";
import Welcome from "@/src/welcome/Welcome";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as firebase from "@react-native-firebase/app";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import {APIKEY, AUTHDOMAIN, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID, APPID, MEASUREMENTID, DATABASEURL} from '@env'
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const firebaseConfig = {
    apiKey: process.env.APIKEY || "",
    authDomain: process.env.AUTHDOMAIN || "",
    projectId: process.env.PROJECTID || "",
    storageBucket: process.env.STORAGEBUCKET || "",
    messagingSenderId: process.env.MESSAGINGSENDERID || "",
    appId: process.env.APPID || "",
    measurementId: process.env.MEASUREMENTID || "",
    databaseURL: process.env.DATABASEURL || "",
  };
  firebase.initializeApp(firebaseConfig);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </PersistGate>
    </Provider>
  );
}
