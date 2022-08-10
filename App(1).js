import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle:{BackgroundColor:'#fff'},
        headerTintColor:'#000',
        headerTitleStyle:{fontWeight:'bold',fontSize:20}
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
