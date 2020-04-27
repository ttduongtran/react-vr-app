import React from "react";
import { Box, Pano, Text, View } from "react-vr";

export default class Primitives extends React.Component {
  render() {
    return (
      <View>
        <Box
          dimWidth={2}
          dimDepth={2}
          DimHeight={2}
          style={{ color: "red" }}
        ></Box>
      </View>
    );
  }
}
