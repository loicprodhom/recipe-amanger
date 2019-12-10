import React from "react";
import { View, Text } from "react-native";
import { Icon, Header, Overlay, Button } from "react-native-elements";
import RecipeList from "./RecipeList";

const HomePage = props => {
  const token = props.authToken;

  const [dialogVisible, setDialogVisible] = React.useState(false);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={{ flex: 1 }}>
        <Header
          rightComponent={
            <Icon
              name="cancel"
              onPress={() => {
                setDialogVisible(true);
              }}
            />
          }
        />
      </View>
      <View style={{ flex: 9 }}>
        <RecipeList token={token} />
      </View>
      <Overlay
        isVisible={dialogVisible}
        onBackdropPress={() => {
          setDialogVisible(false);
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
                setDialogVisible(false);
                props.setAuthToken("");
              }}
              type="solid"
            />
            <Button
              title="No"
              onPress={() => {
                setDialogVisible(false);
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
