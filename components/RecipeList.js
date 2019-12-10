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

      Axios.get(ENDPOINTS.recipes, config)
        .then(response => {
          //console.log(response.data._embedded.recipes);
          setRecipeList(recipes);
          console.log(recipes);
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
