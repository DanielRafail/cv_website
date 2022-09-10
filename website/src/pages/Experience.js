import React from "react";
import { forwardRef } from "react";
import theme from "../styling/theme";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import TimelineObject from "../components/TimelineObject";
import Typography from "@material-ui/core/Typography";
import education from "../texts/education.json";
import work_history from "../texts/work_history.json";
import languages from "../texts/coding_languages.json";
import MaterialTable from "material-table";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import css from "../styling/css.scss";

class Experience extends React.Component {
  render() {
    const tableIcons = {
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
      )),
      PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
      )),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => (
        <ArrowDownward {...props} ref={ref} />
      )),
      ViewColumn: forwardRef((props, ref) => (
        <ViewColumn {...props} ref={ref} />
      )),
    };
    return (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <TimelineObject
          title="Work History"
          json={work_history}
          spacedTitle={true}
          spacedParagraphs={true}
        />
        <TimelineObject title="Education" json={education} />
        <div className="experience-container">
          <Typography
            variant="h3"
            color="textPrimary"
            className="margin-bottom"
          >
            Languages, Tools and Frameworks Known
          </Typography>
          <div className="experience-languages-table">
            <MaterialTable
              icons={tableIcons}
              style={css}
              columns={[
                { title: "Name", field: "name" },
                { title: "Experience", field: "experience" },
              ]}
              data={languages.data}
              options={{
                showTitle: false,
                pageSize: 10,
                pageSizeOptions: [10, 15, 20],
              }}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(Experience);
