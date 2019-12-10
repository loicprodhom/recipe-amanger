import React from "react";
import Axios from "axios";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { recipes } from "../temp/tempdata";

import { ENDPOINTS } from "../resources/endpoints";

const RecipeList = props => {
  const token = props.token;
  const [recipeList, setRecipeList] = React.useState([]);

  React.useEffect(() => {
    if (token !== "") {
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
        return <ListItem key={i} title={recipe.name} chevron />;
      })}
    </View>
  );
};

export default RecipeList;
