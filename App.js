import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Axios from "axios";
import IngredientList from "./components/IngredientList";
import RecipeList from "./components/RecipeList";
import { ENDPOINTS } from "./resources/endpoints";
import * as qs from "query-string";

export default function App() {
  const [authToken, setAuthToken] = React.useState("");

  React.useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    const requestBody = {
      username: "user",
      password: "user"
    };

    Axios.post(ENDPOINTS.token, qs.stringify(requestBody), config)
      .then(response => {
        console.log(response.data);
        setAuthToken(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <IngredientList token={authToken} />
      <RecipeList token={authToken} />
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
