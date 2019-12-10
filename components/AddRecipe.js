import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Input, ListItem } from "react-native-elements";
import Axios from "axios";
import { ENDPOINTS } from "../resources/endpoints";

const AddRecipe = props => {
  const token = props.token;
  const [recipe, setRecipe] = useState({ name: "", contents: [] });
  const [ingredients, setIngredients] = useState([]);
  const [search, setSearch] = useState("");

  React.useEffect(() => {
    if (token !== "" && token !== undefined) {
      const config = {
        headers: { Authorization: "Bearer " + token }
      };

      Axios.get(ENDPOINTS.ingredients, config)
        .then(response => {
          setIngredients(response.data._embedded.ingredients);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [token]);

  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <View style={{ flex: 1 }}>
        <Input
          placeholder="Name"
          value={recipe.name}
          onChangeText={text => {
            setRecipe({ ...recipe, name: text });
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Input
          placeholder="Search"
          value={search}
          onChangeText={text => {
            setSearch(text);
          }}
        />
      </View>
      <ScrollView style={{ flex: 8 }}>
        {ingredients.map((ingredient, i) => {
          return (
            <ListItem key={i} bottomDivider title={ingredient.name} chevron />
          );
        })}
      </ScrollView>
      <ScrollView style={{ flex: 1 }}>
        {recipe.contents.map((item, i) => {
          return <ListItem key={i} title={item.name} bottomDivider />;
        })}
        <Button title="Save" />
      </ScrollView>
    </View>
  );
};

export default AddRecipe;
