import React from "react";
import { AppRegistry, View } from "react-vr";
import App from "./vr/src/App";
export default class demo extends React.Component {
  render() {
    return (
      <View>
        <App />
        <p></p>
      </View>
    );
  }
}

AppRegistry.registerComponent("demo", () => demo);
