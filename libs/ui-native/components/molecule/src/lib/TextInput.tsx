import React from 'react';
import {
  View,
  StyleSheet,
  TextInput as ASTextInput,
  TextInputProps as ASTextInputProps,
} from 'react-native';
import { Text } from '@nx-monorepo/ui-native/components/atom';
interface TextInputProps extends ASTextInputProps {
  icon?: string;
  valid?: boolean | null;
}

export const TextInput = ({ valid, icon, ...props }: TextInputProps) => {
  return (
    <View style={[styles.container, { borderWidth: 1 }]}>
      <View style={styles.icon}>
        <Text>A</Text>
      </View>
      <ASTextInput
        style={[styles.input]}
        underlineColorAndroid="transparent"
        {...props}
      />
      <View style={styles.icon}>
        <Text>B</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 40,
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
  input: {
    height: '100%',
    fontFamily: 'iranSans',
    flexGrow: 1,
    textAlign: 'center',
  },
  icon: {
    paddingHorizontal: 10,
  },
});
