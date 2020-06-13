import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import TimelineObject from "../components/TimelineObject"
import Typography from '@material-ui/core/Typography';
import education from "../texts/education.json"
import work_history from "../texts/work_history.json"



class Experience extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <TimelineObject title="Work History" json={work_history}/>
                <TimelineObject title="Education" json={education}/>
                <Typography variant="h3" color="textPrimary">
                        Languages Known
                    </Typography>
                    <p>c#, java, etc</p>
            </MuiThemeProvider>
        );
    }
}


export default withRouter(Experience);
