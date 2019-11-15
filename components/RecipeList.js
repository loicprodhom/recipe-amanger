import React from "react";
import Axios from "axios";
import { Text } from "react-native";

import { ENDPOINTS } from "../resources/endpoints";

const RecipeList = () => {
  React.useEffect(() => {
    Axios.get(ENDPOINTS.recipes)
      .then(response => {
        console.log(response.data._embedded.recipes);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return <Text>Coming soon...</Text>;
};

export default RecipeList;
