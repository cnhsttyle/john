import { StyleSheet } from 'react-native';
import { unit } from 'stylesheets';

export const hitSlopLen = unit(10);
export const layout = StyleSheet.create({
  hitSlop: {
    top: hitSlopLen,
    bottom: unit(20),
    left: hitSlopLen,
    right: hitSlopLen,
  },
});
