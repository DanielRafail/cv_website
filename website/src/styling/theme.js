import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        width: "25%",
        maxWidth: "25%"
      }
    },
    PrivateTabIndicator:{
      root:{
        transition: "none !important"
      }
    },
    MuiTimelineOppositeContent:{
      root:{
        flex: "0.04"
      }
    },
    MuiGrid:{
      root:{
        width:"99% !important",
        marginBottom:"20px !important"
      }
    }
  }
});