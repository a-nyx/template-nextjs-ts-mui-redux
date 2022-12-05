import { createTheme, ThemeOptions } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

const themeOptions: ThemeOptions = {
  palette: {
    background: {
      default: lightBlue[300],
    },
  },
};

export default createTheme(themeOptions);
