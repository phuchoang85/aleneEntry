import { View, Text } from "react-native";
import React from "react";
import { RootStackParams } from ".";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "@/src/welcome/Welcome";
import Test from "@/src/test/Test";
import Submit from "@/src/submit/Submit";
import { useDispatch } from "react-redux";
import { questionSelect, restart } from "@/redux/slice/ResultSlice";
import PageFour from "@/src/pageFour/PageFour";
import PageFive from "@/src/pageFive/PageFive";

const NavigationApp = () => {
  const Stack = createNativeStackNavigator<RootStackParams>();
  const dispatch = useDispatch();
  return (
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
        listeners={{
          beforeRemove: () => {
            dispatch(questionSelect(null));
          },
        }}
      />
      <Stack.Screen
        name="Submit"
        component={Submit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PageFour"
        component={PageFour}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PageFive"
        component={PageFive}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavigationApp;
