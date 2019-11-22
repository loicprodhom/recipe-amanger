import React from "react";
import Axios from "axios";
import { Text } from "react-native";
import { ENDPOINTS } from "../resources/endpoints";

const IngredientList = props => {
  const token = props.token;
  React.useEffect(() => {
    if (token !== "") {
      const config = {
        headers: { Authorization: "Bearer " + token }
      };
      Axios.get(ENDPOINTS.ingredients, config)
        .then(response => {
          console.log(response.data._embedded.ingredients);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [token]);

  return <Text>Coming soon...</Text>;
};

export default IngredientList;
