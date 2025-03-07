import { createTheme, PaletteOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const palette: PaletteOptions = {
  primary: {
    main: "#E7FAFE",
  },

  secondary: {
    main: "#fff",
  },

  info: {
    main: "#000",
  },
};

const typography: TypographyOptions = {
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

  h1: {
    fontSize: "4rem",
    fontWeight: 600,
    color: "#000",
  },

  body1: {
    color: "rgba(0,0,0,60%)",
  },
};

const muiTheme = createTheme({
  palette,
  typography,
});

export default muiTheme;
