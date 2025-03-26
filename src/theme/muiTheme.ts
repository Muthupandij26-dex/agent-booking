import { createTheme, SimplePaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    stroke: SimplePaletteColorOptions;
    backgroundcolor: SimplePaletteColorOptions;
    textcolor: SimplePaletteColorOptions;
    highlightcolor: SimplePaletteColorOptions;
    headertextcolor: SimplePaletteColorOptions;
    black: SimplePaletteColorOptions;
    white: SimplePaletteColorOptions;
    bordercolor: SimplePaletteColorOptions;
    textlightcolor: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    stroke?: SimplePaletteColorOptions;
    backgroundcolor?: SimplePaletteColorOptions;
    textcolor?: SimplePaletteColorOptions;
    highlightcolor?: SimplePaletteColorOptions;
    headertextcolor?: SimplePaletteColorOptions;
    black?: SimplePaletteColorOptions;
    white?: SimplePaletteColorOptions;
    bordercolor?: SimplePaletteColorOptions;
    textlightcolor?: SimplePaletteColorOptions;
  }

  interface Theme {
    custom: {
      boxshadow: string;
      linearGradient: string;
      sidebarShadow: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      boxshadow?: string;
      linearGradient?: string;
      sidebarShadow?: string;
    };
  }
}

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#0F6CBD",
      light: "#edf0f3",
    },
    secondary: {
      main: "#0a0a0a",
    },
    error: {
      main: "#FF0000",
    },
    backgroundcolor: {
      main: "#ffffffb8",
      light: "#0953740a",
    },
    stroke: {
      main: "#e2e2e2",
    },
    textcolor: {
      main: "#637381",
      light: "#ffffff",
    },
    headertextcolor: {
      main: "#095374",
    },
    highlightcolor: {
      main: `#edf0f3`,
    },
    textlightcolor: {
      main: "#5E6F7D",
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#fff",
    },
    bordercolor: {
      main: "#D5D6D6",
    },
  },
  typography: {
    fontFamily: "Medium",
    fontSize: 13, // Base font size
    h1: {
      fontSize: 28,
      fontFamily: "Bold",
    },
    h2: {
      fontSize: 24,
      fontFamily: "SemiBold",
    },
    h3: {
      fontSize: 13,
      fontFamily: "SemiBold",
      fontWeight: 500,
    },
    h4: {
      fontSize: 16,
      fontFamily: "Medium",
    },
    h5: {
      fontSize: 14,
      fontFamily: "Medium",
    },
    h6: {
      fontSize: 12,
      fontFamily: "Regular",
    },
    subtitle1: {
      fontSize: 16,
      fontFamily: "Medium",
    },
    subtitle2: {
      fontSize: 14,
      fontFamily: "Medium",
      color: "#1B010C",
    },
  },

  custom: {
    boxshadow: "0px 0px 10px 0px rgba(206, 187, 187, 0.1)",
    linearGradient:
      "linear-gradient(312deg, rgba(237,240,243,1) 26%, rgba(245,248,249,1) 49%)",
    sidebarShadow: "0px 0px 10px 0px rgba(248, 248, 248, 0.1)",
  },
});
