import React from "react";
import { View, Picker } from "react-native";
import { Overlay, Input, Button, Text } from "react-native-elements";
import Axios from "axios";
import { ENDPOINTS } from "../resources/endpoints";

const AddContent = props => {
  const token = props.token;
  const [quantity, setQuantity] = React.useState("");
  const [state, setState] = React.useState({
    unit: { name: "" },
    units: [{ name: "" }, { name: "" }]
  });

  React.useEffect(() => {
    if (token !== "" && token !== undefined) {
      const config = {
        headers: { Authorization: "Bearer " + token }
      };
      Axios.get(ENDPOINTS.units, config)
        .then(response => {
          console.log(response.data._embedded.units);
          setState({
            units: response.data._embedded.units,
            unit: response.data._embedded.units[0]
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  const save = () => {
    console.log({
      payload: {
        ingredient: props.ingredient._links.ingredient.href,
        quantity: Number(quantity),
        unit: state.unit._links.self.href
      },
      unit: state.unit.abbreviation,
      ingredient: props.ingredient.name,
      quantity: Number(quantity)
    });
    props.addIngredient({
      payload: {
        ingredient: props.ingredient._links.ingredient.href,
        quantity: Number(quantity),
        unit: state.unit._links.self.href
      },
      unit: state.unit.abbreviation,
      ingredient: props.ingredient.name,
      quantity: Number(quantity)
    });
    setQuantity("");
    setState({
      ...state,
      unit: state.units[0]
    });
    props.setSearch("");
    props.closeAddContent();
  };

  return (
    <Overlay
      isVisible={props.visible}
      onBackdropPress={props.closeAddContent}
      height="70%"
    >
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <Text>{props.ingredient.name}</Text>
        <Input
          placeholder="Quantity"
          value={quantity}
          onChangeText={setQuantity}
        />
        <Picker
          selectedValue={state.unit}
          onValueChange={value => {
            setState({ ...state, unit: value });
          }}
        >
          {state.units.map((item, i) => {
            return <Picker.Item key={i} value={item} label={item.name} />;
          })}
        </Picker>
        <Button title="ADD" onPress={save} />
      </View>
    </Overlay>
  );
};

export default AddContent;
