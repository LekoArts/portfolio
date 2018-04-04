import Typography from 'typography';

const typography = new Typography({
  title: 'LekoArts',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Inter UI', 'sans-serif'],
  bodyFontFamily: ['Inter UI', 'sans-serif'],
  scaleRatio: 2.441,
  headerWeight: 700,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
});

export default typography;
