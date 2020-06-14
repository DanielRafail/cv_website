import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

class ErrorPage extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
          <div>

          </div>
      </MuiThemeProvider>
    );
  }
}


export default withRouter(ErrorPage);
