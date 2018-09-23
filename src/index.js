import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import ActivityDashboard from './Activity/ActivityDashboard';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5e35b1'
    },
    secondary: {
      main: '#ffff00'
    }
  }
});

const App = props => (
  <MuiThemeProvider theme={theme}>
    <ActivityDashboard />
  </MuiThemeProvider>
);

ReactDOM.render(<ActivityDashboard />, document.getElementById('root'));
registerServiceWorker();
