
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SVN_Gotham_Regular: require("../assets/fonts/SVN-Gotham Regular.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if ( !fontsLoaded) {
    return null;
  }

  return (
    <Stack>
    <Stack.Screen name="screens/pageOne" />
  </Stack>
  );
}
