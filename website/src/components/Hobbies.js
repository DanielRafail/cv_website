import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FadeOutImages from "./FadeOutImages"
import Grid from '@material-ui/core/Grid';
import taekwondo from "../images/taekwondo.jpg"
import photography from "../images/photography.jpg"
import videogames from "../images/videogames.jpg"
import guitar from "../images/guitar.jpg"
import technology from "../images/technology.jpg"
import netflix from "../images/netflix.jpg"




class Hobbies extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <div className="hobbies-title">
                    <Typography variant="h3" color="textPrimary">
                        Hobbies
                    </Typography>
                </div>
                <div className="hobbies-row">
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <FadeOutImages title="Photography" src={photography}/>
                            <p>*All pictures shown in the slideshow above were taken by me in Montreal</p>
                        </Grid>
                        <Grid item xs={4}>
                        <FadeOutImages title="Taekwondo" src={taekwondo}/>
                        </Grid>
                        <Grid item xs={4}>
                        <FadeOutImages title="Video Games" src={videogames}/>
                        </Grid>
                    </Grid>
                </div>

                <div className="hobbies-row">
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                        <FadeOutImages title="Music" src={guitar}/>
                        </Grid>
                        <Grid item xs={4}>
                        <FadeOutImages title="Technology" src={technology}/>
                        </Grid>
                        <Grid item xs={4}>
                        <FadeOutImages title="Movies" src={netflix}/>
                        </Grid>
                    </Grid>
                </div>

            </MuiThemeProvider>
        );
    }
}


export default Hobbies;
