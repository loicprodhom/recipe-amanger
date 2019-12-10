import React from "react";
import { View, Text } from "react-native";
import { Icon, Header, Overlay, Button, Divider } from "react-native-elements";
import RecipeList from "./RecipeList";
import AddRecipe from "./AddRecipe";

const HomePage = props => {
  const token = props.authToken;

  const [signoutWarningVisible, setSignoutWarningVisible] = React.useState(
    false
  );

  const [currView, setCurrView] = React.useState("List");

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={{ flex: 2 }}>
        <Header
          rightComponent={
            <Icon
              name="cancel"
              onPress={() => {
                setSignoutWarningVisible(true);
              }}
            />
          }
        />
      </View>
      <View style={{ flex: 12 }}>
        {currView === "List" ? <RecipeList token={token} /> : <AddRecipe />}
      </View>
      <Divider style={{ backgroundColor: "white" }} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-end"
        }}
      >
        <Button
          title="Recipes"
          onPress={() => {
            setCurrView("List");
          }}
        />
        <Button
          title="Add a Recipe"
          onPress={() => {
            setCurrView("Add");
          }}
        />
      </View>
      <Overlay
        isVisible={signoutWarningVisible}
        onBackdropPress={() => {
          setSignoutWarningVisible(false);
        }}
        height="30%"
      >
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text>Are you sure you want to sign out ?</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Button
              title="Yes"
              onPress={() => {
                setSignoutWarningVisible(false);
                props.setAuthToken("");
              }}
              type="solid"
            />
            <Button
              title="No"
              onPress={() => {
                setSignoutWarningVisible(false);
              }}
              type="solid"
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
};

export default HomePage;
