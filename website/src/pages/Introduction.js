import React from 'react';
import theme from "../styling/theme"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import montreal from "../images/montreal.jpg"
import Typography from '@material-ui/core/Typography';


class Introduction extends React.Component {
  componentDidMount() {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        loadImg.onload = () =>
          resolve(image.url)
        loadImg.onerror = err => reject(err)
      })
    }
    loadImage(montreal)
      .then(() => this.setState({ imgLoaded: true }))
      .catch(err => console.log("Failed to load images", err))
  }


  render() {
    var ready;
    { this.state && this.state.imgLoaded ? ready = true : ready = false }
    return (
      ready ?
        <MuiThemeProvider theme={createMuiTheme(theme)}>
          <div className="no-margin">
            <div className="index-container no-margin">
              <img src={montreal} alt="montreal" className="index-picture"></img>
              <div className="index-container-text-container">
                <Typography variant="body1" className="index-container-text-center">Daniel Rafail</Typography>
                <Typography variant="body1" className="index-container-text-center-description">Software Engineer</Typography>
              </div>
            </div>
            <div className="index-paragraph-container">
              <section className="margin-bottom">
                <Typography variant="h3">Who am I?</Typography>
                <Typography variant="body1" className="index-paragraph">
                  My name is Daniel Rafail, I am capable software engineer, with a computer science degree from Dawson, and undergoing my studies in Concordia for a degree in Software Engineering. I have experience programming via multiple in-school projects (which I have released on my github) but most importantly via professional experience working as a developper touching every facet imaginable. I have a wide range of experience including everything from coding APIs, to designing UI and databases.
            </Typography>
              </section>
              <section className="margin-bottom">
                <Typography variant="h3">What are my goals?</Typography>
                <Typography variant="body1" className="index-paragraph">
                  I have two distinct set of goals to achieve. First and foremost, it would to improve, learn new things, become a better programmer. I do not think there is a stage at which anyone could call themselves "the best programmer" but my goal is to come as close as possible to that point. And I hope to reach that point by taking on challenging projects, working with great teams, and exchanging knowledge via conversations or debates with anyone who would be willing. My second goal would be to help build something great. I enjoy building new things, helping people, and seeing a smile on their face when it all works as planned. Any interesting project is a project that I wish to participate in.
              </Typography>
              </section>
              <section className="margin-bottom">
                <Typography variant="h3">What kind of projects have you worked on?</Typography>
                <Typography variant="body1" className="index-paragraph">
                  During my time at Dawson, I have mostly done very small, scrambled programs which are available on my github, which you are free to take a loot at. Examples of projects I've worked on are "JAG", a java/javafx email application, similar to the looks of outlook or gmail, which would allow the user to send or recieve emails with CC, BCC, attachments, embedded images, etc. Another school project I worked on was a music selling website, following the same logic as iTunes or groove music. My professional works include working with python in order to create pdf file with charts out of database information, creating APIs, back end, and front end for a website, and working on a python script to decipher test results into human-readable coherent information.
            </Typography>
              </section>
            </div>
          </div>
        </MuiThemeProvider>
        :
        //bad fix for hiding footer and header, need to redo later
        <div className="no-margin blank-page" />
    );
  }
}

export default withRouter(Introduction);
