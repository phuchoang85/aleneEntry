import { useFonts } from "expo-font";
import { Stack } from 'expo-router'; // Import thêm Screen
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName="screens/pageOne">
      <Stack.Screen name="screens/pageOne" options={{headerShown: false}}/>
      <Stack.Screen name="screens/pageTwo" options={{headerShown: false}}/>
      <Stack.Screen name="index" options={{headerShown: false}}/>
    </Stack>
  );
}