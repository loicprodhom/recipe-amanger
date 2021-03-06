import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Text, Overlay } from "react-native-elements";
import * as qs from "query-string";
import Axios from "axios";
import { ENDPOINTS } from "../resources/endpoints";

const Login = props => {
  const authToken = props.authToken;
  const setAuthToken = props.setAuthToken;
  const [user, setUser] = React.useState({ username: "", password: "" });

  const [error, setError] = React.useState(false);

  const authenticate = () => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    const requestBody = user;

    Axios.post(ENDPOINTS.token, qs.stringify(requestBody), config)
      .then(response => {
        if (response.data === "no token found") {
          setError(true);
        } else {
          setAuthToken(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: "center", width: "50%" }}
      behavior="padding"
    >
      <Overlay
        isVisible={error}
        onBackdropPress={() => {
          setError(false);
        }}
        height="30%"
      >
        <View>
          <Text h4>Invalid login credentials</Text>
          <Button
            onPress={() => {
              setError(false);
            }}
            title="Okay"
          />
        </View>
      </Overlay>
      <View style={{ flex: 1 }}></View>

      <View
        style={{
          flex: 2,
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Text h2>Login</Text>
        <Input
          placeholder="Username"
          value={user.username}
          onChangeText={text => {
            setUser({ ...user, username: text });
          }}
          autoCapitalize="none"
        />
        <Input
          placeholder="Password"
          value={user.password}
          onChangeText={text => {
            setUser({ ...user, password: text });
          }}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Button title="SIGN IN" onPress={authenticate} type="solid" />
      </View>
      <View style={{ flex: 1 }}></View>
    </KeyboardAvoidingView>
  );
};

export default Login;
