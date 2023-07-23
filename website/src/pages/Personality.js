import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import Carousel from "../components/Carousel"
import ImageWithText from "../components/ImageWithText"
import team from "../images/team.jpg"
import meeting from "../images/meeting.jpg"
import idea from "../images/idea.jpg"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Hobbies from "../components/Hobbies"
import buildings from "../images/buildings.jpg"
import buildings2 from "../images/buildings2.jpg"
import pigeon from "../images/pigeon.jpg"
import wall from "../images/wall.jpg"
import smallbuildings from "../images/smallbuildings.jpg"
import smallbuildings2 from "../images/smallbuildings2.jpg"
import smallpigeon from "../images/smallpigeon.jpg"
import smallwall from "../images/smallwall.jpg"
import taekwondo from "../images/taekwondo.jpg"
import photography from "../images/photography.jpg"
import videogames from "../images/videogames.jpg"
import guitar from "../images/guitar.jpg"
import technology from "../images/technology.jpg"
import gym from "../images/gym.jpg"

class Personality extends React.Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth };
    }

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }


    render() {
        const { windowWidth } = this.state;
        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <div>
                    <Carousel images={windowWidth && windowWidth > 1000 ? [buildings, buildings2, pigeon, wall] : [smallbuildings, smallbuildings2, smallpigeon, smallwall]} />
                    <p className="carousel-description">*All pictures shown in the slideshow above were taken by me in Montreal</p>

                </div>
                <Paper className="personality-title-paper no-margin">
                    <Typography variant="h3" color="textPrimary" align="center">
                        A creative, free flowing mind, open to criticism and feedback, who believes that everyday is a new learning experience.
                    </Typography>
                </Paper>
                <ImageWithText src={team} alt="Image of a team solving a puzzle"
                    description="As they say, there is no i in Team and I stand by that statement. Working with a team is a very important part of programming and one that I firmly believe in. Whether it is asking for help, having peer reviews, helping others or getting different points of view, I believe that working with others is a core element of what being a developer is about.
                    "
                    title="A Balanced Team Player"
                    gridColor="skyblue"
                />
                <ImageWithText src={meeting} alt="Image of a meeting taking place"
                    description="Asking questions and have discussions is one of the best ways to learn and improve. I am always eager to learn more and as such believe engaging in such conversations to be a very healthy and rewarding experience. I value an environment which allows for open debates and which welcomes curiosity."
                    title="Curious"
                    gridColor="darkgrey"
                />
                <ImageWithText src={idea} alt="Image of a lightbulb on top of someone's head"
                    description="I believe that there is always room for improvement. I also believe that a challenge is always fun. I am very enthusiastic about figuring better solutions to problems and I always welcome the opinion of others. The essence of Technology and Computer Science is to always improve and find a new and better way to do things."
                    title="Innovative"
                    gridColor="cadetblue"
                />
                <Hobbies content={[
                    { image: photography, title: "Photography", alt: "Closeup of someone taking a picture" },
                    { image: taekwondo, title: "Martial Arts", description: null, alt: "Someone kicking up in the air" },
                    { image: videogames, title: "Video Games", description: null, alt: "Xbox controller" },
                    { image: guitar, title: "Music", description: null, alt: "Someone playing guitar" },
                    { image: technology, title: "Technology", description: null, alt: "Someone coding on a mac" },
                    { image: gym, title: "Fitness", description: null, alt: "Man lifting weights" }
                ]} />
            </MuiThemeProvider>
        );
    }
}


export default withRouter(Personality);
