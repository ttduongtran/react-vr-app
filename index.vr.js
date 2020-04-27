import React from "react";
import { AppRegistry, View } from "react-vr";
import App from "./vr/src/App";
export default class demo extends React.Component {
  render() {
    return (
      <View>
        <App />
<<<<<<< HEAD
        <p></p>
=======
        <p>1</p>
        <p>2</p>
>>>>>>> e725450... 2
      </View>
    );
  }
}

AppRegistry.registerComponent("demo", () => demo);
