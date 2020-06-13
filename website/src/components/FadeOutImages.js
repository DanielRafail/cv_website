import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class FadeOutImages extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <div className="hobbies-container">
                    <img src={this.props.src} className="fade-out-image" alt={this.props.alt}></img>
                    <Typography variant="body1" className="MuiTypography-body1 hobbies-container-text-center">{this.props.title}</Typography>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default FadeOutImages;
