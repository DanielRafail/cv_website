import React, { useState, useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import LinkTab from "./LinkTab";
import { withRouter } from "react-router-dom";
import history from "../history";

const Navigation = () => {
  let [navigation_tab_value, setNavigation_tab_value] = useState(0);

  useEffect(() => {
    setNavigation_tab_value(verifyTabIndex());
  }, []);

  function verifyTabIndex() {
    let tab_index = 0;
    if (history.location && history.location.state) {
      tab_index = history.location.state.tabIndex;
    } else {
      if (history.location) {
        switch (history.location.pathname) {
          case "/introduction":
            tab_index = 0;
            break;
          case "/experience":
            tab_index = 1;
            break;
          case "/personality":
            tab_index = 2;
            break;
          default:
            break;
        }
      }
    }
    return tab_index;
  }

  function handleChange(event, newValue) {
    setNavigation_tab_value(
      history.location && history.location.tabIndex
        ? history.location.tabIndex
        : newValue
    );
  }

  return (
    <nav id="navigation-header">
      <Paper>
        <Tabs
          TabIndicatorProps={{
            style: {
              animation: "none",
            },
          }}
          value={navigation_tab_value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <LinkTab label="Introduction" href="/introduction" tabIndex={0} />
          <LinkTab label="Experience" href="/experience" tabIndex={1} />
          <LinkTab label="Personality" href="/personality" tabIndex={2} />
        </Tabs>
      </Paper>
    </nav>
  );
};

export default withRouter(Navigation);
