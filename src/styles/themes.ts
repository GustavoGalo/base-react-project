export const light = {
  name: 'light',
  breakingPoints: {
    mobile: 768,
    smallDesktop: 1024,
  },
  colors: {
    text: '#333',
    background: '#F7F7FC',
    primary: '#5F2EEA',
  },
};

export type ITheme = typeof light;

export const themes = {
  light,
};
