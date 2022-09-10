import React from "react";
import theme from "../styling/theme";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

//https://reactjsexample.com/react-component-that-renders-a-media-gallery-slider-carousel/
//library used

class Carousel extends React.Component {
  render() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        {this.props.images ? (
          <AutoplaySlider
            className="carousel"
            play={true}
            cancelOnInteraction={false}
            infinite={true}
            interval={6000}
          >
            {this.props.images.map(function (img, i) {
              return <div data-src={img} key={i} />;
            })}
          </AutoplaySlider>
        ) : (
          <React.Fragment />
        )}
      </MuiThemeProvider>
    );
  }
}

export default Carousel;
