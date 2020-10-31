import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: { main: "#6F516D" },
    secondary: { main: "#9F4872" },
  },
  typography: {
    fontFamily: ["Kanit", "Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: "2.25rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
    },
    h3: {
      fontSize: "1.875rem",
    },
    h6: {
      fontSize: "1.125rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
});
