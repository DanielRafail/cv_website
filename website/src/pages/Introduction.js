import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

class Introduction extends React.Component {
  render() {
    console.log(this.props)
    return (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <div>
          <h1>gay</h1>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default withRouter(Introduction);
