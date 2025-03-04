import { createTheme } from "@mui/material";

const typography = {
  fontFamily: [
    "inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen-Sans",
    "Ubuntu",
    "Cantarell",
    "Helvetica Neue",
    "sans-serif",
  ].join(","),
};

const muiTheme = createTheme({
  typography,
});

export default muiTheme;
