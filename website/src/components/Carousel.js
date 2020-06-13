import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import buildings from "../images/buildings.png"
import buildings2 from "../images/buildings2.png"
import code from "../images/code.png"
import pigeon from "../images/pigeon.png"
import wall from "../images/wall.png"


//https://reactjsexample.com/react-component-that-renders-a-media-gallery-slider-carousel/
//library used

class Carousel extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <AwesomeSlider className="carousel">
                    <div data-src={buildings} />
                    <div data-src={buildings2} />
                    <div data-src={code} />
                    <div data-src={pigeon} />
                    <div data-src={wall} />
                </AwesomeSlider>
            </MuiThemeProvider>
        );
    }
}


export default Carousel;
