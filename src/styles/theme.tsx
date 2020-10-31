import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: { main: "#6F516D" },
    secondary: { main: "#9F4872" },
  },
  typography: {
    fontFamily: ["Kanit", "Roboto", "sans-serif"].join(","),
    h3: {
      fontSize: "1.875rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
});
