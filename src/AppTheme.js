import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import { purple } from '@material-ui/core/colors';

const AppTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple,
  }
});

export default AppTheme;