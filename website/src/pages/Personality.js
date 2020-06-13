import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import Carousel from "../components/Carousel"
import ImageWithText from "../components/ImageWithText"
import pigeon from "../images/pigeon.png"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


class Personality extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <div>
                    <Carousel />
                </div>
                <Paper className="personality-title-paper">
                    <Typography variant="h3" color="textPrimary" align="center">
                        A creative, free flowing mind, open to criticism and feedback, who believes that everyday is a new learning experience.
                    </Typography>
                </Paper>
                <ImageWithText src={pigeon} alt="A man feeding a pigeon" description="a Free Thinker" />
                <ImageWithText src={pigeon} alt="A man feeding a pigeon" description="a Free Thinker" />
                <ImageWithText src={pigeon} alt="A man feeding a pigeon" description="a Free Thinker" />
            </MuiThemeProvider>
        );
    }
}


export default withRouter(Personality);
