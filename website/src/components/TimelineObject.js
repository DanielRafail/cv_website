import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Container from '@material-ui/core/Container';

class TimelineObject extends React.Component {


    render() {

        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <Container className="experience-container">
                    <Typography variant="h3" color="textPrimary">
                        {this.props.title}
                    </Typography>
                    <Timeline align="left">
                        {this.props.json && this.props.json.data ? this.props.json.data.map(function (object, j) {
                            return <TimelineItem key={j}>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        {object.year}
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    {object && object.data ? <TimelineConnector /> : <React.Fragment />}
                                </TimelineSeparator>
                                <TimelineContent>
                                    {object && object.data ? object.data.map(function (obj, i) {
                                        return <div key={i}>
                                            <br /><br />
                                            <Typography variant="h6" component="h1">
                                                {obj.title}
                                            </Typography>
                                            {obj.definition && Array.isArray(obj.definition) ? obj.definition.map(function (def, k) {
                                                return <Typography key={k}>{def}</Typography>}) 
                                                : 
                                                <Typography>{obj.definition}</Typography>
                                            }
                                            <br /><br />
                                        </div>
                                    }) : <React.Fragment />}
                                </TimelineContent>
                            </TimelineItem>
                        }) : <React.Fragment />}
                    </Timeline>
                </Container>
            </MuiThemeProvider>
        );
    }
}


export default TimelineObject;
