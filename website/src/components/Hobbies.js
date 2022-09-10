import React from "react";
import theme from "../styling/theme";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FadeOutImages from "./FadeOutImages";
import Grid from "@material-ui/core/Grid";

class Hobbies extends React.Component {
  getBody = () => {
    var body;
    if (this.props.content) {
      body = (
        <div className="hobbies-row">
          <Grid container spacing={3}>
            {this.props.content.map(function (data, i) {
              return (
                <Grid item xs={4} key={i}>
                  <FadeOutImages
                    title={data.title}
                    src={data.image}
                    alt={data.alt}
                  />
                  {data.description ? (
                    <p className="image-with-text-description">
                      {data.description}
                    </p>
                  ) : (
                    <React.Fragment />
                  )}
                </Grid>
              );
            })}
          </Grid>
        </div>
      );
    } else {
      body = <React.Fragment />;
    }
    return body;
  };

  render() {
    const bodyItem = this.getBody();
    return (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <div className="hobbies-title">
          <Typography variant="h3" color="textPrimary">
            Hobbies
          </Typography>
        </div>
        {bodyItem}
      </MuiThemeProvider>
    );
  }
}

export default Hobbies;
