import React from 'react';

import { Image, StyleProp, ImageStyle } from 'react-native';
type props = {
  width: number;
  height: number;
  style?: StyleProp<ImageStyle>;
};
export const Logo = ({ width, height, style }: props) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const imageUri = require(`libs/assets/images/icons/react.png`);

  return (
    <Image
      source={imageUri}
      style={[style, { width: width, height: height }]}
    />
  );
};
