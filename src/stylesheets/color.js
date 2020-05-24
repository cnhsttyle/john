import { mapValues } from 'lodash';
import { StyleSheet } from 'react-native';

const color = {
  black1: 'black',
  black3: '#333',
  pink: '#ff3b66',
  white: 'white',
};

const define = {
  c: mapValues(color, (val) => ({ color: val })),
  bg: mapValues(color, (val) => ({ backgroundColor: val })),
};


export const c = StyleSheet.create(define.c);
export const bg = StyleSheet.create(define.bg);

// export default define;
