import React from "react";
import Axios from "axios";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { recipes } from "../temp/tempdata";

import { ENDPOINTS } from "../resources/endpoints";
import RecipeDetails from "./RecipeDetails";

const RecipeList = props => {
  const token = props.token;

  const [recipeList, setRecipeList] = React.useState([]);
  const [overlay, setOverlay] = React.useState({
    visible: false,
    recipe: {}
  });

  React.useEffect(() => {
    if (token !== "" && token !== undefined) {
      console.log(token);

      const config = {
        headers: { Authorization: "Bearer " + token }
      };
      let list = [];

      //Fetch recipes
      Axios.get(ENDPOINTS.recipes, config)
        .then(response => {
          //Set recipes
          list = response.data._embedded.recipes;
          //For each recipe
          list.forEach(item => {
            //Fetch contents
            Axios.get(item._links.ingredients.href, config)
              .then(response => {
                //Set contents
                item.ingredients = response.data._embedded.containses;
                //For each content
                item.ingredients.forEach(content => {
                  //Fetch the ingredient
                  Axios.get(content._links.ingredient.href, config)
                    .then(response => {
                      //Set the ingredient
                      content.ingredient = response.data.name;
                      //Fetch the unit
                      Axios.get(content._links.unit.href, config)
                        .then(response => {
                          //Set the unit
                          content.unit = response.data.abbreviation;
                          setRecipeList([...list]);
                        })
                        .catch(error => {
                          console.log(error);
                        });
                    })
                    .catch(error => {
                      console.log(error);
                    });
                });
              })
              .catch(error => {
                console.log;
              });
          });
          //console.log(list);
          //setRecipeList(list);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [token]);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      {recipeList.map((recipe, i) => {
        return (
          <ListItem
            key={i}
            title={recipe.name}
            chevron
            onPress={() => {
              //navigate("Details", { recipe: recipe });
              setOverlay({ visible: true, recipe: recipe });
            }}
          />
        );
      })}
      <RecipeDetails
        visible={overlay.visible}
        recipe={overlay.recipe}
        setOverlay={setOverlay}
      />
    </View>
  );
};

export default RecipeList;
