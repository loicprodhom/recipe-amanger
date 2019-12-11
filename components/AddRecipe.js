import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Input, ListItem } from "react-native-elements";
import Axios from "axios";
import { ENDPOINTS } from "../resources/endpoints";
import AddContent from "./AddContent";

const AddRecipe = props => {
  const token = props.token;
  const [recipe, setRecipe] = useState({ name: "", contents: [] });
  const [ingredients, setIngredients] = useState([]);
  const [search, setSearch] = useState("");
  const [contentForm, setContentForm] = useState({
    open: false,
    ingredient: {}
  });

  const addIngredient = content => {
    setRecipe({ ...recipe, contents: [...recipe.contents, content] });
  };

  const closeAddContent = () => {
    setContentForm({ open: false, ingredient: {} });
  };

  const saveRecipe = () => {
    const config = {
      headers: { Authorization: "Bearer " + token }
    };
    Axios.post(ENDPOINTS.recipes, recipe, config)
      .then(response => response.data)
      .then(response => {
        let tempContents = recipe.contents;
        tempContents.forEach(item => {
          item.payload.recipe = response._links.self.href;
          Axios.post(ENDPOINTS.recipecontents, item.payload, config)
            .then(response => {
              props.setCurrView("List");
            })
            .catch(error => {
              console.log(error);
            });
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

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
          placeholder="Search ingredients..."
          value={search}
          onChangeText={text => {
            setSearch(text);
          }}
        />
      </View>
      <ScrollView style={{ height: "35%" /*flex: 8*/ }}>
        {ingredients
          .filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((ingredient, i) => {
            return (
              <ListItem
                key={i}
                bottomDivider
                title={ingredient.name}
                chevron
                onPress={() => {
                  setContentForm({ open: true, ingredient: ingredient });
                }}
              />
            );
          })}
      </ScrollView>
      <ScrollView style={{ height: "35%" /*flex: 3*/ }}>
        {recipe.contents.map((item, i) => {
          return (
            <ListItem
              key={i}
              title={`- ${item.quantity}${
                item.unit === "" ? "" : `${item.unit}`
              } ${item.ingredient} `}
              bottomDivider
              onLongPress={() => {
                let tempContents = recipe.contents;
                tempContents.splice(i, 1);
                setRecipe({ ...recipe, contents: tempContents });
              }}
            />
          );
        })}
        <Button title="Save" onPress={saveRecipe} />
      </ScrollView>
      <AddContent
        ingredient={contentForm.ingredient}
        visible={contentForm.open}
        setSearch={setSearch}
        addIngredient={addIngredient}
        closeAddContent={closeAddContent}
        token={token}
      />
    </View>
  );
};

export default AddRecipe;
