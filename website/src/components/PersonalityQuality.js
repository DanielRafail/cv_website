import React from "react";
import Typography from "@material-ui/core/Typography";

const PersonalityQuality = (props) => {
  return (
    <>
      <div
        className="image-with-text"
        style={{
          backgroundColor: props.gridColor,
        }}
      >
        <div className="personality-image-wrapper">
          <img src={props.src} alt={props.alt} className="personality-image" />
        </div>
        <div className="personality-text">
          {props.title && (
            <Typography variant="h4" color="textPrimary">
              {props.title}
            </Typography>
          )}
          {props.description &&
            props.description.map((text, i) => {
              return (
                <Typography key={i} variant="body1" color="textPrimary" style={{fontSize: "1.15rem"}}>
                  {text}
                </Typography>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PersonalityQuality;
