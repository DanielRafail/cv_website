import React from "react";
import theme from "../styling/theme";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Container from "@material-ui/core/Container";

const TimelineObject = (props) => {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <Container className="experience-container">
        <Typography variant="h3" color="textPrimary">
          {props.title}
        </Typography>
        <Timeline align="left">
          {props.json &&
            props.json.data &&
            props.json.data.map(function (dataElement, j) {
              return (
                <TimelineItem key={j}>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      {dataElement.year}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    {dataElement && dataElement.data && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    {dataElement &&
                      dataElement.data &&
                      dataElement.data.map(function (obj, i) {
                        return (
                          <div key={i}>
                            <br />
                            <br />
                            <Typography variant="h6" component="h1">
                              {obj.title}
                              {props.spacedTitle && (
                                <>
                                  <br />
                                  <br />
                                </>
                              )}
                            </Typography>
                            {obj.definition && Array.isArray(obj.definition) ? (
                              obj.definition.map(function (def, k) {
                                return (
                                  <Typography key={k}>
                                    {props.spacedParagraphs && (
                                      <>
                                        {" "}
                                        {def}
                                        <br />
                                        <br />
                                      </>
                                    )}
                                  </Typography>
                                );
                              })
                            ) : (
                              <Typography>{obj.definition}</Typography>
                            )}
                            <br />
                            <br />
                          </div>
                        );
                      })}
                  </TimelineContent>
                </TimelineItem>
              );
            })}
        </Timeline>
      </Container>
    </MuiThemeProvider>
  );
};

export default TimelineObject;
