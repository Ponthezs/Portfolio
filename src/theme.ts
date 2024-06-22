import { createTheme, responsiveFontSizes } from '@mui/material/styles';


 let theme = createTheme({
  palette: {
    primary: {
      main: '#48D1CC',
    },
    secondary: {
      main: '#00008B',
    },
  },
  typography: {

    fontFamily: "Apple Color Emoji"

  }

});

theme = responsiveFontSizes (theme);

export default theme