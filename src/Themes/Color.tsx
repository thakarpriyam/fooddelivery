// src/theme/colors.ts
type ThemeColors = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  border: string;
  secondbgcolor: string;
  main: string;
  normaltext: string;
  error: string;
  btndisable: string;
  txtdisable: string;
};

const getColors = (theme: 'default' | 'custom' = 'default'): ThemeColors => {
  if (theme === 'custom') {
    return {
      primary: '#ff5722',
      secondary: '#8bc34a',
      background: '#F9F9F9',
      text: '#000',
      success: '#4caf50',
      warning: '#ff9800',
      danger: '#f44336',
      info: '#2196f3',
      border: '#e0e0df',
      secondbgcolor: '#FFF',
      main: '#9B1C45',
      normaltext: '#7c7c7c',
      error: '#cc0000',
      btndisable: '#cccccc',
      txtdisable: '#666666',
    };
  }

  return {
    primary: '#6200ee',
    secondary: '#03dac4',
    background: '#f5f5f5',
    text: '#000',
    success: '#4caf50',
    warning: '#ff9800',
    danger: '#f44336',
    info: '#2196f3',
    border: '#e0e0df',
    secondbgcolor: '#FFF',
    main: '#9B1C45',
    normaltext: '#7c7c7c',
    error: '#cc0000',
    btndisable: '#cccccc',
    txtdisable: '#666666',
  };
};

export default getColors;
