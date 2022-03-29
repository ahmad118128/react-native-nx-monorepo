import React from 'react';
import { Text as AsText } from 'react-native';

type Props = {
  children: string;
  align?: 'center' | 'right' | 'left';
  color?: string;
  size?: number;
  mr?: number;
  ml?: number;
};

export const Text = ({
  children,
  color,
  size,
  align,
  mr = 0,
  ml = 0,
}: Props) => (
  <AsText
    style={{
      fontFamily: 'iranSans',
      color: color,
      fontSize: size,
      textAlign: align,
      marginRight: mr,
      marginLeft: ml,
    }}
  >
    {children}
  </AsText>
);
