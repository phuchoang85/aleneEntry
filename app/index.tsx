import { StatusBar} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
import NavigationApp from "./navigationApp";

export type RootStackParams = {
  Test: any;
  Welcome: any;
  Submit: any;
};

const App = () => {
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
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.5)"
          barStyle={"light-content"}
        />
        <NavigationContainer linking={linking} independent={true}>
          <NavigationApp />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
