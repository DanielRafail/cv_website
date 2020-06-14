import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

//https://reactjsexample.com/react-component-that-renders-a-media-gallery-slider-carousel/
//library used

class Carousel extends React.Component {

    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                {this.props.images ?
                    <AwesomeSlider className="carousel">
                        {this.props.images.map(function (img, i) {
                            return  <div data-src={img} key={i}/>
                        })}
                    </AwesomeSlider>
                    :
                    <React.Fragment />}
            </MuiThemeProvider>
        );
    }
}


export default Carousel;
