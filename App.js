import { ImageBackground, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feed } from "./src/screens/feed";
import { PublicationInsta } from "./src/screens/comments";
import logo from "./assets/instagram.png";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="Instagram"
          component={Feed}
          options={{
            headerTitle: () => (
              <ImageBackground style={styles.image} source={logo} />
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f5f5f5",
            },
          }}
        />
        <Stack.Screen name="Comments" options={{ headerTitle: "Comentários"}} component={PublicationInsta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 57,
  },
});
