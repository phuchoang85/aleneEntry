import { View, Text } from "react-native";
import React from "react";
import Welcome from "../src/welcome/Welcome";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from "@/src/test/Test";
import Submit from "@/src/submit/Submit";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackParams = {
  Test: any;
  Welcome: any;
  Submit: any;
}

const index = () => {
  const Stack = createNativeStackNavigator<RootStackParams>();
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Submit"
          component={Submit}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
