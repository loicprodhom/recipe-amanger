import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IngredientList from "./components/IngredientList";
import RecipeList from "./components/RecipeList";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

export default function App() {
  const [authToken, setAuthToken] = React.useState("");

  React.useEffect(() => {}, [authToken]);

  return (
    <View style={styles.container}>
      {authToken === "" ? (
        <Login setAuthToken={setAuthToken} />
      ) : (
        <HomePage authToken={authToken} setAuthToken={setAuthToken} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
