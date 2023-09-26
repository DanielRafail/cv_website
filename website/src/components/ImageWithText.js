import React from "react";
import Typography from "@material-ui/core/Typography";

const ImageWithText = (props) => {
  function getBody() {
    return (
      props.content && (
        <div className={props.title.toLowerCase()}>
          {props.content.map(function (data, i) {
            return (
              <props.component
                key={i}
                title={data.title}
                src={data.image}
                description={data.description ? data.description : ""}
                link = {data.link ? data.link : null}
                alt={data.alt}
              />
            );
          })}
        </div>
      )
    );
  }

  return (
    <>
      <div className={props.title.toLowerCase() + "-title"}>
        <Typography variant="h3" color="textPrimary">
          {props.title}
        </Typography>
      </div>
      {getBody()}
    </>
  );
};

export default ImageWithText;
