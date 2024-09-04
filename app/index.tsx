import {  StatusBar } from "react-native";
import React from "react";
import Welcome from "../src/welcome/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Test from "@/src/test/Test";
import Submit from "@/src/submit/Submit";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";

export type RootStackParams = {
  Test: any;
  Welcome: any;
  Submit: any;
};


const App = () => {
  const Stack = createNativeStackNavigator<RootStackParams>();

  const linking = {
    prefixes: ["anlene://", "https://anlene.com"],
    config: {
      screens: {
        Welcome: {
          path: "Welcome",
        },
        Test: {
          path: "Test",
        },
        Submit: {
          path: "Submit",
        },
      },
    },
  };

 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar translucent={true}  backgroundColor= 'rgba(0, 0, 0, 0.5)' barStyle={"light-content"} />
        <NavigationContainer linking={linking} independent={true}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;
