const buttonColors = {
  primary: 'rgba(53, 52, 60, 1)',
  secondary: 'rgba(0, 123, 255, 1)',
  warning: 'rgba(255, 149, 0, 1)',
  success: 'rgba(52, 199, 89, 1)',
  error: 'rgba(255, 59, 48, 1)',
  info: 'rgba(48, 176, 199, 1)',
} as const

const buttonHoverColors = {
  primaryHover: 'rgba(117, 117, 117, 1)',
  secondaryHover: 'rgba(50, 173, 230, 1)',
  warningHover: 'rgba(184, 107, 0, 1)',
  successHover: 'rgba(38, 146, 65, 1)',
  purpleHover: 'rgba(114, 66, 193, 1)',
  errorHover: 'rgba(224, 11, 0, 1)',
  infoHover: 'rgba(0, 199, 190, 1)',
  greyHover: 'rgba(139, 140, 149, 1)',
} as const

const mainColors = {
  green: '#81B29A',
  slate: '#5F797B',
  blue: '#3D405B',
  red: '#DE5B3E',
  sunset: '#F2CC8F',
  champagne: '#ECD7C8',
  melon: '#E8AB91',
  beach: '#FFFAF3',
  canyon: '#D9B59B',
  mint: '#F0F6F7',
  mintLight: '#E8F3F2',
} as const

const opacityColors = {
  greenOpacity: 'rgba(129, 178, 154, .4)',
  redOpacity: 'rgba(222, 91, 62, .4)'
} as const

const accentColors = {
  blue: '#2582E2',
  blueLight: '#80CFFF',
  blueMedium: '#0441A3',
  blueDark: '#00246B',
  orange: '#FFA614',
  orangeLight: '#FFECB6',
  orangeMedium: '#D86C00',
  orangeDark: '#9E4000',
  purple: '#9E67EC',
  purpleLight: '#D2BBFF',
  purpleMedium: '#581EC6',
  purpleDark: '#31007F',
  teal: '#6FD5E4',
  tealLight: '#B3FDFF',
  tealMedium: '#058EAD',
  tealDark: '#00536D',
  red: '#FF4C35',
  redLight: '#FFA1A1',
  redMedium: '#D11915',
  redDark: '#7C0000',
} as const

const allGreys = {
  grey100: '#F7F7FC',
  grey200: '#EFF0F6',
  grey300: '#E4E5EE',
  grey400: '#DADCE2',
  grey500: '#C7C7CC',
  grey600: '#B0B1B7',
  grey700: '#8B8C95',
  grey800: '#636366',
  grey900: '#35343C',
} as const

const greys = {
  100: '#F7F7FC',
  200: '#EFF0F6',
  300: '#E4E5EE',
  400: '#DADCE2',
  500: '#C7C7CC',
  600: '#B0B1B7',
  700: '#8B8C95',
  800: '#636366',
  900: '#35343C',
} as const

const colors = {
  ...buttonColors,
  ...buttonHoverColors,
  ...accentColors,
  ...mainColors,
  ...allGreys,
  grey: { ...greys },
  body: 'rgba(70, 70, 72, 1)',
  white: '#FFFFFF',
  light: 'rgba(240, 240, 240, 1)',
  textDisabled: 'rgba(139, 140, 149, 1)',
  disabled: 'rgba(0, 0, 0, 0.12)',
  warmGrey: '#F9F7F7',
  black: '#000000',
} as const

export { buttonColors, buttonHoverColors, opacityColors, colors }
