import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //  headerStyle: { backgroundColor: "blue" },
        headerStyle: { backgroundColor: "#25FF" },
        headerTintColor: "#ffff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="First Page" component={FirstPage} />
      <Stack.Screen name="Second Page" component={SecondPage} />
      <Stack.Screen name="Third Page" component={ThirdPage} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}