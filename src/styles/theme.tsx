import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: { main: "#6F516D" },
  },
  typography: {
    fontFamily: ["Kanit", "Roboto", "sans-serif"].join(","),
  },
});
