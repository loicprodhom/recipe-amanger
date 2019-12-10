import React from "react";
import { View } from "react-native";
import { Overlay, Text, ListItem } from "react-native-elements";

const RecipeDetails = props => {
  const recipe = props.recipe;

  const closeOverlay = () => {
    props.setOverlay({ visible: false, recipe: {} });
  };

  return (
    <Overlay isVisible={props.visible} onBackdropPress={closeOverlay}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text h4>{recipe.name}</Text>
        </View>
        <View style={{ flex: 9 }}>
          {recipe.ingredients === undefined ? (
            <View></View>
          ) : (
            recipe.ingredients.map((content, i) => {
              return (
                <ListItem
                  key={i}
                  title={`${content.quantity} ${
                    content.unit === "" ? "" : `${content.unit} of`
                  } ${content.ingredient}`}
                />
              );
            })
          )}
        </View>
      </View>
    </Overlay>
  );
};

export default RecipeDetails;
