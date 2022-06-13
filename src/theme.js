import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import Montserrat from './fonts/Montserrat-Regular.woff2';
import NotoSansJP from './fonts/NotoSansJP-Regular.woff2';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, NotoSansJP, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
        elevation: 0,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      },
    },
  },
});

export default theme;
