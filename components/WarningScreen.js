import React from "react";
import { View } from "react-native";
import { Overlay, Text, Button } from "react-native-elements";
import Axios from "axios";

const WarningScreen = props => {
  const token = props.token;
  const deleteRecipe = () => {
    console.log("deleting...");
    console.log(props.recipe);
    const config = {
      headers: { Authorization: "Bearer " + token }
    };
    Axios.delete(props.recipe._links.self.href, config)
      .then(() => {
        props.setWarning({ visible: false, recipe: {} });
        props.fetchRecipes();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Overlay
      isVisible={props.visible}
      onBackdropPress={() => {
        props.setWarning({
          visible: false,
          recipe: {}
        });
      }}
      height="50%"
    >
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <Text>Are you sure you want to delete this recipe ?</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button title="Yes" onPress={deleteRecipe} />
          <Button
            title="No"
            onPress={() => {
              props.setWarning({ visible: false, recipe: {} });
            }}
          />
        </View>
      </View>
    </Overlay>
  );
};

export default WarningScreen;
