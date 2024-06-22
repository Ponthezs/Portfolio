import { createTheme, responsiveFontSizes } from '@mui/material/styles';


 let theme = createTheme({
  palette: {
    primary: {
      main: '#4F4F4F',
    },
    secondary: {
      main: '#68838B',
    },

    

  },
  typography: {

    fontFamily: "sans-serif"

  }

});

theme = responsiveFontSizes (theme);

export default theme