import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import TimelineObject from "../components/TimelineObject"
import Typography from '@material-ui/core/Typography';
import education from "../texts/education.json"
import work_history from "../texts/work_history.json"
import GridListObject from "../components/GridListObject"
import androidstudio from "../images/languages/androidstudio.png"
import aspnet from "../images/languages/aspnet.png"
import bootstrap from "../images/languages/bootstrap.png"
import csharp from "../images/languages/csharp.png"
import firebase from "../images/languages/firebase.png"
import git from "../images/languages/git.png"
import html from "../images/languages/html.png"
import java from "../images/languages/java.jpg"
import javascript from "../images/languages/javascript.png"
import laravel from "../images/languages/laravel.png"
import mongoDB from "../images/languages/mongoDB.jpg"
import mysql from "../images/languages/mysql.png"
import node from "../images/languages/node.jpg"
import php from "../images/languages/php.png"
import postgre from "../images/languages/postgre.png"
import sass from "../images/languages/sass.png"
import sql from "../images/languages/sql.jpg"
import sqlLite from "../images/languages/sqlLite.png"
import vsc from "../images/languages/vsc.png"
import react from "../images/languages/react.png"
import vs from "../images/languages/vs.jpeg"






class Experience extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <TimelineObject title="Work History" json={work_history} />
                <TimelineObject title="Education" json={education} />
                <div className="experience-container">
                    <Typography variant="h3" color="textPrimary" className="margin-bottom">
                        Languages, Tools and Frameworks Known
                    </Typography>
                    <GridListObject content={
                        [
                            { image: androidstudio, alt: "Image of Android studio" },
                            { image: aspnet, alt: "Image of asp net" },
                            { image: bootstrap, alt: "Image of bootstrap" },
                            { image: csharp, alt: "Image of c#" },
                            { image: firebase, alt: "Image of DB firebase" },
                            { image: git, alt: "Image of git" },
                            { image: html, alt: "Image of html" },
                            { image: java, alt: "Image of java" },
                            { image: javascript, alt: "Image of javascript" },
                            { image: laravel, alt: "Image of laravel" },
                            { image: mongoDB, alt: "Image of mongoDB" },
                            { image: mysql, alt: "Image of mysql" },
                            { image: node, alt: "Image of node" },
                            { image: php, alt: "Image of php" },
                            { image: postgre, alt: "Image of postgre" },
                            { image: sass, alt: "Image of sass" },
                            { image: sql, alt: "Image of sql" },
                            { image: react, alt: "Image of react" },
                            { image: vs, alt: "Image of visual studio" },
                            { image: vsc, alt: "Image of Android visual studio code"},
                            { image: sqlLite, alt: "Image of sql lite" }]} />
                </div>

            </MuiThemeProvider>
        );
    }
}


export default withRouter(Experience);
