import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        danielrafail.surge.sh
      </Link>{" "}
      2021
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className="no-margin footer-container">
      <footer className={classes.footer}>
        <CssBaseline />
        <Container maxWidth="sm">
          <div id="footer-icon-container">
            <a href="https://www.linkedin.com/in/daniel-rafail-55b961187/">
              <img src={linkedin} className="footer-icon" alt="linkedin icon" />
            </a>
            <a href="https://github.com/DanielRafail">
              <img src={github} className="footer-icon" alt="github icon" />
            </a>
          </div>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
