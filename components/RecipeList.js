import React from "react";
import Axios from "axios";
import { Text } from "react-native";

import { ENDPOINTS } from "../resources/endpoints";

const RecipeList = props => {
  const token = props.token;
  React.useEffect(() => {
    if (token !== "") {
      console.log(token);

      const config = {
        headers: { Authorization: "Bearer " + token }
      };

      Axios.get(ENDPOINTS.recipes, config)
        .then(response => {
          console.log(response.data._embedded.recipes);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [token]);

  return <Text>Coming soon...</Text>;
};

export default RecipeList;
