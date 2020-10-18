import React, { ReactElement } from "react";
import { Image, ImageProps } from "react-native";

export default function Card(props: {
  faceUrl: ImageProps;
  backUrl: ImageProps;
}): ReactElement {
  return (
    <Image
      style={{
        width: 136,
        height: 200,
      }}
      source={props.faceUrl}
    />
  );
}
