import React from "react";
import { View, Button, Text } from "react-native";

const HomePage = props => {
  return (
    <View>
      <Text>This is the HomePage. We have the token {props.authToken}</Text>
      <Button
        title="SIGN OUT"
        onPress={() => {
          props.setAuthToken("");
        }}
      />
    </View>
  );
};

export default HomePage;
