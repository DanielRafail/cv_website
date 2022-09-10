import React from "react";
import theme from "../styling/theme";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import montreal from "../images/montreal.jpg";
import Typography from "@material-ui/core/Typography";

class Introduction extends React.Component {
  componentDidMount() {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        loadImg.onload = () => resolve(image.url);
        loadImg.onerror = (err) => reject(err);
      });
    };
    loadImage(montreal)
      .then(() => this.setState({ imgLoaded: true }))
      .catch((err) => console.log("Failed to load images", err));
  }

  render() {
    var ready;
    this.state && this.state.imgLoaded ? (ready = true) : (ready = false);
    return ready ? (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <div className="no-margin">
          <div className="index-container no-margin">
            <img src={montreal} alt="montreal" className="index-picture"></img>
            <div className="index-container-text-container">
              <Typography
                variant="body1"
                className="index-container-text-center"
              >
                Daniel Rafail
              </Typography>
              <Typography
                variant="body1"
                className="index-container-text-center-description"
              >
                Software Engineer
              </Typography>
            </div>
          </div>
          <div className="index-paragraph-container">
            <section className="margin-bottom">
              <Typography variant="h3">Who am I?</Typography>
              <Typography variant="body1" className="index-paragraph">
                My name is Daniel Rafail, I am a capable developer. I have an
                associates in Computer Science and Mathematics from Dawson, and
                a Bachelor of Computer Science from Concordia. I have coded
                multiple school projects, all of which are available on my
                Github. I have shorty worked as a programmer giving me some
                insight on how professionally developed business software looks
                like. I have a wide range of experience including everything
                from APIs, to designing UI and databases.
              </Typography>
            </section>
            <section className="margin-bottom">
              <Typography variant="h3">What are my goals?</Typography>
              <Typography variant="body1" className="index-paragraph">
                There are two goals I hope to achieve. Firstly, I would like to
                improve my skills, learn new things, and become a better
                programmer. I strive to become the best developer I could
                possibly be. I expect to reach that point by taking on
                challenging projects, working with great teams, finding amazing
                mentors and participate in discussions. My second goal is to
                help build something great. I enjoy building new things, helping
                people, and seeing a smile on their faces when it all works as
                planned. Any interesting project is a project I want to
                participate in.
              </Typography>
            </section>
            <section className="margin-bottom">
              <Typography variant="h3">
                What kind of projects have you worked on?
              </Typography>
              <Typography variant="body1" className="index-paragraph">
                I have worked on a multitude of different projects throughout my
                education at Dawson and Concordia. These projects are made in
                multiple different languages and frameworks such as JSF,
                Laravel, Java, C#, etc.. At Dawson, I have worked on projects
                such as JAG, a Java/Javafx program similar to Outlook or Gmail.
                This application allowed its users to send emails with
                attachements, embedded attachments, cc, bcc, priorities, etc. I
                have also worked on Musically, a music selling website similar
                to iTunes or Groove Music. In Concordia, I worked on projects
                such as Risk. Done in C++, this game includes multiple armies
                each capable of different moves and abilities. Another project
                done was the Covid Database which held information about
                companies and their inventories. It is a project with a website
                and database component. My professional experience revolved
                around creating pdf files filled with charts and information
                about a user. This was mostly done using python. It also
                includes working on APIs, backend, frontend, and python
                scripts to analyze statistical information.
              </Typography>
            </section>
          </div>
        </div>
      </MuiThemeProvider>
    ) : (
      //bad fix for hiding footer and header, need to redo later
      <div className="no-margin blank-page" />
    );
  }
}

export default withRouter(Introduction);
