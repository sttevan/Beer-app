import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5C3526', 
    },
    secondary: {
      main: '#FBB656', 
    },
    background: {
      default: '#F5F5F5', 
    },
  },
  typography: {
    fontFamily: "Grenze Gotisch Medium",
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export { theme };
