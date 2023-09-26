import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PersonalityQuality from "../components/PersonalityQuality";
import team from "../images/team.jpg";
import meeting from "../images/meeting.jpg";
import idea from "../images/idea.jpg";
import ImageWithText from "../components/ImageWithText";
import taekwondo from "../images/taekwondo.jpg";
import photography from "../images/photography.jpg";
import videogames from "../images/videogames.jpg";
import guitar from "../images/guitar.jpg";
import technology from "../images/technology.jpg";
import gym from "../images/gym.jpg";
import FadeOutImages from "../components/FadeOutImages";
import Projects from "../components/Projects";
import Gmail from "../images/gmail.png";
import Stock from "../images/stock.png";
import TrafficControl from "../images/traffic-control.jpg";
import Warzone from "../images/warzone.png";
import WoW from "../images/wow.jpg";
import Revibing from "../images/revibing.png";
import "../styling/personality.scss";

const Personality = (props) => {
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
    Promise.all(
      [
        team,
        meeting,
        idea,
        taekwondo,
        photography,
        videogames,
        guitar,
        technology,
        gym,
        Gmail,
        Stock,
        TrafficControl,
        Warzone,
        WoW,
        Revibing,
      ].map((image) => loadImage(image))
    )
      .then(() => setImgLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return imgLoaded ? (
    <>
      <ImageWithText
        title="Projects"
        component={Projects}
        content={[
          {
            image: Gmail,
            title: "JAG",
            description:
              "A Java and JavaFx based application using SMTP and IMAP to send and retrieve emails. All emails are locally saved on the computer and not the cloud",
            alt: "Gmail logo",
            link: "https://github.com/DanielRafail/JAG",
          },
          {
            image: Stock,
            title: "Stock Exchange",
            description:
              "A PHP based application which gets the value of stocks in real time and allows a user to play with a fake bank account",
            alt: "Stock prices",
            link: "https://github.com/DanielRafail/stockExchange",
          },
          {
            image: TrafficControl,
            title: "Traffic Simulation",
            description:
              "A C# project which reads a file to get a street and cars layout and allows the cars to drive from one side of the street to the other",
            alt: "Traffic Simulation game",
            link: "https://github.com/DanielRafail/Traffic-Simulation",
          },
          {
            image: Warzone,
            title: "Warzone",
            description:
              "A C++ project which replicates the game Warzone created by Risk allowing for a player to play against other players or bots",
            alt: "Risk Warzone the game",
            link: "https://github.com/DanielRafail/Warzone",
          },
          {
            image: WoW,
            title: "WoW-Lookup",
            description:
              "A Django and React project which allows for a user to verify a World of Warcraft character's information in terms of all type of content",
            alt: "Wow-Lookup interface",
            link: "https://github.com/DanielRafail/wow-lookup",
          },
          {
            image: Revibing,
            title: "Revibing",
            description:
              "A Django and React project which creates a dashboard allowing for an employee to keep an eye out for all type of activities related to his work",
            alt: "Revibing interface",
            link: "https://github.com/DanielRafail/hackathon-2023/tree/main",
          },
        ]}
      />
      <PersonalityQuality
        src={team}
        alt="Image of a team solving a puzzle"
        description={[
          "In today's dynamic and collaborative work environments, being a balanced team player is not just an attribute; it's a vital asset. As a computer science graduate, I've honed my skills not only in coding and problem-solving but also in effective teamwork. My ability to strike a balance between individual contributions and team dynamics sets me apart.",
          "I understand that diverse talents and perspectives drive innovation. While I bring my technical expertise to the table, I also actively listen to my team members, valuing their input and respecting their unique strengths. This collaborative spirit fosters an environment where creativity flourishes, and we can collectively tackle complex challenges.",
        ]}
        title="A Balanced Team Player"
        gridColor="skyblue"
      />
      <PersonalityQuality
        src={meeting}
        alt="Image of a meeting taking place"
        description={[
          "Curiosity is the spark that ignites innovation, and as a computer science graduate, my insatiable curiosity is my greatest asset. I don't just stop at the surface; I delve deep into the heart of a problem, relentlessly seeking answers and exploring uncharted territories.",
          "My passion for learning goes beyond the classroom. I'm constantly staying updated with the latest technological trends and breakthroughs, experimenting with cutting-edge tools, and seeking out new challenges. This thirst for knowledge not only keeps me at the forefront of the industry but also propels me to push boundaries and create innovative solutions.",
        ]}
        title="Curious"
        gridColor="darkgrey"
      />
      <PersonalityQuality
        src={idea}
        alt="Image of a lightbulb on top of someone's head"
        description={[
          "Innovation is the cornerstone of progress, and as a computer science graduate, I embody the spirit of innovation in every facet of my work. I don't settle for the ordinary; I constantly strive to redefine the boundaries of what's possible.",
          "My innovative mindset is evident in my approach to problem-solving. I don't merely follow established solutions; I seek to improve and optimize them. I have a track record of identifying inefficiencies in processes and systems, then devising innovative solutions that enhance productivity and performance.",
        ]}
        title="Innovative"
        gridColor="cadetblue"
      />
      <ImageWithText
        title="Hobbies"
        component={FadeOutImages}
        content={[
          {
            image: photography,
            title: "Photography",
            alt: "Closeup of someone taking a picture",
          },
          {
            image: taekwondo,
            title: "Martial Arts",
            alt: "Someone kicking up in the air",
          },
          { image: videogames, title: "Video Games", alt: "Xbox controller" },
          { image: guitar, title: "Music", alt: "Someone playing guitar" },
          {
            image: technology,
            title: "Technology",
            alt: "Someone coding on a mac",
          },
          { image: gym, title: "Fitness", alt: "Man lifting weights" },
        ]}
      />
    </>
  ) : (
    <></>
  );
};

export default withRouter(Personality);
