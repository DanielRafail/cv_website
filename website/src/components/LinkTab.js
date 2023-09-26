import React from "react";
import Tab from "@material-ui/core/Tab";
import history from "../history";

const LinkTab = (props) => {
  return (
    <Tab
      disableRipple={true}
      onClick={(event) => {
        history.push(props.href, { tabIndex: props.tabIndex });
      }}
      {...props}
    />
  );
};

export default LinkTab;
