import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#97a9ab',
      main: '#697a7c',
      dark: '#3e4e50',
      contrastText: '#000'
    },
    secondary: {
      light: '#4b4647',
      main: '#231f20',
      dark: '#000000',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;
