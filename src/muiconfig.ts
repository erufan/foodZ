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
};

const muiTheme = createTheme({
  palette,
  typography,
});

export default muiTheme;
