import React from "react";
import { View, Text, Button } from "react-native";
import * as qs from "query-string";
import Axios from "axios";
import { ENDPOINTS } from "../resources/endpoints";

const Login = props => {
  const authToken = props.authToken;
  const setAuthToken = props.setAuthToken;
  const authenticate = () => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    const requestBody = {
      username: "user",
      password: "user"
    };

    Axios.post(ENDPOINTS.token, qs.stringify(requestBody), config)
      .then(response => {
        console.log(response.data);
        setAuthToken(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View>
      <Text>Login page</Text>
      <Button title="SIGN IN" onPress={authenticate} />
    </View>
  );
};

export default Login;
