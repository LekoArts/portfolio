import { rgba } from 'polished';

const transition = {
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  duration: '0.4s',
};

const colors = {
  white: {
    base: '#fff',
    dark: '#f0f0f0',
    blue: '#94a1c9',
  },
  black: {
    base: '#2a2b2f',
    blue: '#2e3246',
  },
  primary: {
    base: '#3498db',
    light: '#5abdff',
    dark: '#3466db',
  },
  secondary: {
    base: '#db8834',
    light: '#ffaf60',
    dark: '#d17c26',
  },
  background: {
    light: '#46507a',
    dark: '#262c41',
  },
};

const tint = {
  black: rgba(colors.black.base, 0.25),
  white: rgba(colors.white.base, 0.75),
  blue: rgba(colors.primary.base, 0.35),
};

const gradient = {
  leftToRight: `linear-gradient(-45deg, ${colors.background.dark} 0%, ${colors.background.light} 100%)`,
  rightToLeft: `linear-gradient(45deg, ${colors.background.dark} 0%, ${colors.background.light} 100%)`,
};

const theme = {
  colors,
  tint,
  gradient,
  breakpoints: {
    s: '600px',
    m: '1199px',
    l: '1200px',
  },
  layout: {
    article: '41.111111rem',
    articleHead: '47.777777rem',
    base: '66.666666rem',
    big: '83.33333rem',
  },
  borderRadius: {
    default: '0.4rem',
    round: '100rem',
  },
  transitions: {
    default: {
      duration: transition.duration,
      timing: transition.easeInOutCubic,
      transition: `all ${transition.duration} ${transition.easeInOutCubic}`,
    },
    boom: {
      duration: transition.duration,
      timing: transition.easeOutBack,
      transition: `all ${transition.duration} ${transition.easeOutBack}`,
    },
  },
};

export default theme;
