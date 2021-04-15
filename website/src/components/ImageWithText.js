import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class ImageWithText extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <Grid container spacing={3} className={"image-with-text grid-color-" + this.props.gridColor}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={3}>
                        <img src={this.props.src} alt={this.props.alt} className="personality-image" />
                    </Grid>
                    {this.props.title ?
                        <Grid item xs={7}>
                            <Typography variant="h4" color="textPrimary">
                                {this.props.title}
                            </Typography>
                            <Typography variant="body1" color="textPrimary">
                                {this.props.description}
                            </Typography>
                        </Grid>
                        :
                        <Grid item xs={7}>
                            <Typography variant="body1" color="textPrimary">
                                {this.props.description}
                            </Typography>
                        </Grid>
                    }

                </Grid>
            </MuiThemeProvider>
        );
    }
}


export default ImageWithText;
