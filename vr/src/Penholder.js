import React from "react";
import { Model, asset, View } from "react-vr";

export default class Penholder extends React.Component {
  render() {
    return (
      <View>
        <Model
          source={{
            obj: asset("/penholder/Table_Set_obj.obj"),
            mtl: asset("Table_Set_obj.mtl"),
          }}
          style={{
            transform: [
              { translate: [-4.5, 0.7, -4.0] },
              { scale: 0.001 },
              { rotateX: -90 },
            ],
          }}
        />
      </View>
    );
  }
}
