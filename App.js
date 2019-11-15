import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Axios from "axios";
import IngredientList from "./components/IngredientList";
import RecipeList from "./components/RecipeList";

const restURL = "https://prodhom-megusta.herokuapp.com/recipes";

export default function App() {
  /*React.useEffect(() => {
    Axios.get(restURL)
      .then(response => {
        console.log(response.data._embedded);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);*/

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <IngredientList />
      <RecipeList />
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
