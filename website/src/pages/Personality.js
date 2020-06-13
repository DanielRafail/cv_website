import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import Carousel from "../components/Carousel"
import ImageWithText from "../components/ImageWithText"
import pigeon from "../images/pigeon.png"
import team from "../images/team.jpg"
import meeting from "../images/meeting.jpg"
import idea from "../images/idea.jpg"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Hobbies from "../components/Hobbies"


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
                <ImageWithText src={team} alt="A man feeding a pigeon"
                    description="It is important for everyone to be able to work independently. No one wants to get hassled every second of the day over minor problems or slight misunderstanding. A problem-solving mind is required in order for one to be able to do his own research in order to figure out a solution to a certain problem you have been working on. But a team spirit is indeed necessary, as your colleagues and friends are there for a reason, to assist you. You shouldn't be scared of asking questions either, or to give out a helping hand. In an office, you work as a team, and there is no i in team. I strongly believe that a balance of both of those personalities is required for the perfect employee. And everyday is a day I push harder to reach that balance, and improve myself."
                    title="A Balanced Team Player" />
                <ImageWithText src={meeting} alt="A man feeding a pigeon" 
                description="In order to learn, one must first ask questions. And some might find it intimidating based on who the correspondant is, but not me. I believe in the power of asking questions, of standing out, of speaking out. I wish to understand what I do, and how it works, because I believe having a fundamental understanding of what you are doing leads to better results. The person who asks a question in the classroom shouldn't be seen as the one having difficulties, but rather as the one who seeks more answers, a better understanding of the topic, and therefore will wield a sharper blade."
                title="Not Scared To Speak Up"
                />
                <ImageWithText src={idea} alt="A man feeding a pigeon" 
                description="If everyone was to keep doing things the way they've always done, never looking for new answers, new techniques, new skills, nothing in this world would ever change. People need to ask themselves questions, they need to wonder about their work, their technique, their craft; Is it the best it could possibly be?  Am I doing it as best as I can? Or am I just doing it based on my previous experiences, on what i'm comfortable with, on what I know? These are questions everyone must ask themselves in order to improve. These are diffcult questions, you will not find an answer straight away, it demands thinking, reflection, time. These are questions I often try to ask myself." 
                title="Innovative"
                />
                <Hobbies/>
            </MuiThemeProvider>
        );
    }
}


export default withRouter(Personality);
