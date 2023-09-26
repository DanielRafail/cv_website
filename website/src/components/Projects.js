import React from "react";
import Typography from "@material-ui/core/Typography";

const Projects = (props) => {
  return (
    <div className="project-wrapper">
      <div
        className="project"
        onClick={props.link ? () => window.open(props.link) : false}
      >
        <img src={props.src} className="project-image" alt={props.alt} />
        <Typography
          variant="body1"
          className="project-title"
          style={{ fontSize: "1.2rem" }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          className="project-description"
          style={{ fontSize: "1.5rem" }}
        >
          {props.description}
        </Typography>
      </div>
    </div>
  );
};

export default Projects;
