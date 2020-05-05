import { PixelRatio, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const scale = width / 720;

export const unit = (value) => PixelRatio.roundToNearestPixel(value * scale);

export const vh = (value) => value * (height / 100);

export const deviceRatio = () => height / width;
