import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Home({ navigation }) {
  // Destructure navigation prop
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Detail");
        }}
      >
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

function Detail() {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
