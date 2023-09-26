import React from "react";
import { withRouter } from "react-router-dom";
import "../styling/error.scss";

const ErrorPage = (props) => {
  return (
    <>
      <div className="error-page-container">
        <p>404 | NOT FOUND</p>
      </div>
    </>
  );
};
export default withRouter(ErrorPage);
