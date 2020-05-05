import { Dimensions, Platform } from 'react-native';


export const test = 1;

export const isIphoneX = () => {
  const { height } = Dimensions.get('window');
  return (
    Platform.OS === 'ios' && (height === 812 || height === 896)
  );
};
