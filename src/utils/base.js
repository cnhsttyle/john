import { Dimensions, Platform, Alert } from 'react-native';


export const test = 1;

export const isIphoneX = () => {
  const { height } = Dimensions.get('window');
  return (
    Platform.OS === 'ios' && (height === 812 || height === 896)
  );
};

export const isIphone = () => {
  if (Platform.OS === 'ios') return true;
  return false;
};

export const showAlert = (title = '알림', msg) => {
  Alert.alert(
    title,
    msg,
    [{ text: '확인', onPress: () => {} }],
    { cancelable: false },
  );
};
