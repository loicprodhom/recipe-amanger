import React from "react";
import Axios from "axios";
import { Text } from "react-native";
import { ENDPOINTS } from "../resources/endpoints";

const IngredientList = () => {
  React.useEffect(() => {
    Axios.get(ENDPOINTS.ingredients)
      .then(response => {
        console.log(response.data._embedded.ingredients);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return <Text>Coming soon...</Text>;
};

export default IngredientList;
