import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import montreal from "../images/montreal.jpg";
import Typography from "@material-ui/core/Typography";
import "../styling/introduction.scss"

const Introduction = () => {
  let [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        loadImg.onload = () => resolve(image.url);
        loadImg.onerror = (err) => reject(err);
      });
    };
    loadImage(montreal)
      .then(() => setImgLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return imgLoaded ? (
    <div className="no-margin">
      <div className="index-container no-margin">
        <img src={montreal} alt="montreal" className="index-picture"></img>
        <div className="index-container-text-container">
          <Typography variant="body1" className="index-container-text-center">
            Daniel Rafail
          </Typography>
          <Typography
            variant="body1"
            className="index-container-text-center-description"
          >
            Software Developer
          </Typography>
        </div>
      </div>
      <div className="index-paragraph-container">
        <section className="margin-bottom">
          <Typography variant="h3">Who am I?</Typography>
          <Typography variant="body1" className="index-paragraph">
            My name is Daniel Rafail, I am a capable developer. I have an
            associates in Computer Science and Mathematics from Dawson, and a
            Bachelor of Computer Science from Concordia. I have coded multiple
            school projects, all of which are available on my Github. I have
            shortly worked as a programmer giving me some insight on how
            professionally developed business software looks like. I have a wide
            range of experience including everything from APIs, to designing UI
            and databases.
          </Typography>
        </section>
        <section className="margin-bottom">
          <Typography variant="h3">What are my goals?</Typography>
          <Typography variant="body1" className="index-paragraph">
            I have two overarching goals that drive me. Firstly, I am committed
            to enhancing my skills, acquiring new knowledge, and evolving into a
            top-tier programmer. My pursuit is to excel in my development
            journey, which I anticipate achieving by embracing challenging
            projects, collaborating with exceptional teams, seeking guidance
            from remarkable mentors, and actively engaging in meaningful
            discussions. Secondly, I aspire to contribute to the creation of
            remarkable endeavors. I derive immense satisfaction from crafting
            innovative solutions, assisting others, and witnessing the joy on
            their faces when everything comes together seamlessly. Any
            captivating project is an endeavor I eagerly seek to be a part of.
          </Typography>
        </section>
        <section className="margin-bottom">
          <Typography variant="h3">
            What kind of projects have you worked on?
          </Typography>
          <Typography variant="body1" className="index-paragraph">
            I have worked on a multitude of different projects throughout my
            education at Dawson and Concordia. These projects are made in
            multiple different languages and frameworks such as JSF, Laravel,
            Java, C#, etc.. At Dawson, I have worked on projects such as JAG, a
            Java/Javafx program similar to Outlook or Gmail. This application
            allowed its users to send emails with attachements, embedded
            attachments, cc, bcc, priorities, etc. I have also worked on
            Musically, a music selling website similar to iTunes or Groove
            Music. In Concordia, I worked on projects such as Warzone. Done in
            C++, this game includes multiple armies each capable of different
            moves and abilities. Another project done was the Covid Database
            which held information about companies and their inventories. It is
            a project with a website and database component. My professional
            experience revolved around creating pdf files filled with charts and
            information about a user. This was mostly done using python. It also
            includes working on APIs, backend, frontend, and python scripts to
            analyze statistical information.
          </Typography>
        </section>
      </div>
    </div>
  ) : (
    //bad fix for hiding footer and header, need to redo later
    <div className="no-margin blank-page" />
  );
};

export default withRouter(Introduction);
