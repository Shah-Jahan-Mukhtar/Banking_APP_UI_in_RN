import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import MyCards from "./screens/MyCards";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <Home />
    <MyCards />
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Tab.Screen name="Home" component={Home} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
