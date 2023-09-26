import React from "react";
import Typography from "@material-ui/core/Typography";

const FadeOutImages = (props) => {
  return (
    <>
      <div className="hobby-wrapper">
        <div className="hobby">
          <img src={props.src} className="fade-out-image" alt={props.alt} />
          <Typography
            variant="body1"
            className="hobby-text"
          >
            {props.title}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default FadeOutImages;
