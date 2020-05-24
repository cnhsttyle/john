/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';
import { isIphone } from 'utils/base';
import { unit } from './base';


const fontTypes = {
  baseB: {
    family: isIphone() ? 'AppleSDGothicNeo-Bold' : 'sans-serif',
    size: [22, 24, 26, 28, 30, 32, 34],
    fontWeight: '700',
  },
  baseM: {
    family: isIphone() ? 'AppleSDGothicNeo-Medium' : 'sans-serif-medium',
    size: [22, 24, 26, 28, 30, 32, 34],
    fontWeight: '500',
  },
  baseR: {
    family: isIphone() ? 'AppleSDGothicNeo-Regular' : 'sans-serif',
    size: [22, 24, 26, 28, 30, 32, 34],
    fontWeight: '400',
  },
};

const define = {};

Object.keys(fontTypes).forEach((key) => {
  const { family, size, fontWeight } = fontTypes[key];
  size.forEach((fontSize) => {
    const options = {
      fontFamily: family,
      fontSize: unit(fontSize),
      fontWeight,
      paddingTop: 0,
    };
    define[`${key}${fontSize}`] = options;
  });
});

export const font = StyleSheet.create(define);
