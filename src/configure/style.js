import { Dimensions, Platform } from 'react-native';

//import scaling
export const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
export const guidelineBaseWidth = 350;
export const guidelineBaseHeight = 680;
export const scale = size => SCREEN_WIDTH / guidelineBaseWidth * size;
export const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
export const STATUS_BAR_HEIGHT = Platform.OS === 'ios'
  ? IS_IPHONE_X
    ? 44
    : 20
  : 0
export const NAV_BAR_HEIGHT = Platform.OS === 'ios'
  ? IS_IPHONE_X
    ? 88
    : 64
  : 64

export const colors = {
  background: {
    primary: '#fdfdfd',
    secondary: '#E6E6E6',
    tertiary: '#90d3f5',
    quartary: '#0291DA',
    underlayLight: 'rgb(240, 240, 240)',
    underlayDark: 'rgb(120, 120, 120)',
    header: '#636f7b',
  },
  text: {
    default: '#f1f1f1',
    inverted: 'white',
    primary: '#fdfdfd',
    secondary: '#525354',
    tertiary: '#f5f5f5',
    hyperlink: '#f1f1f1',
    warning: '#f1f1f1',
  },
  theme: {
    primary: '#0291DA',
    secondary: '#3AB795',
    tertiary: '#02a13d',
    quartary: '#029c3f',
    fifth: '#00b5d1',
  },
  status: {
    positive: '#0291DA',
    neutral: '#636f7b',
    negative: '#636f7b',
    warning: 'red',
  }
}

export const font = {
  xl: scale(40),
  lg: scale(24),
  md: scale(16),
  sm: scale(12),
  xs: scale(10),
  input: 16,
}

export const spacing = {
  xl: scale(40),
  lg: scale(30),
  md: scale(20),
  sm: scale(10),
  xs: scale(5),
}

export const fontFamily = {
  primary: null,
}

export const textStyles = {
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  paragraph: {
    color: colors.text.black,
    fontSize: font.sm,
    fontFamily: fontFamily.primary,
  },
  heading1: {
    color: colors.theme.primary,
    fontSize: font.lg,
    fontFamily: fontFamily.primary,
  },
  heading2: {
    color: colors.text.black,
    fontSize: font.md,
    fontFamily: fontFamily.primary,
  },
  heading3: {
    color: colors.text.black,
    fontSize: font.md,
    fontFamily: fontFamily.primary,
  },
  hyperlink: {
    color: colors.text.hyperlink,
    fontSize: font.sm,
    fontFamily: fontFamily.primary,
  },
};
