import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id: "T_001_v2",
    name: "dark-variant",
    colors: {
      body: "#131A26",
      scrollHandle: "#1A242E",
      scrollHandleHover: "#15202A",
      primary: "#0ABAB5",
      secondary: "#FF9500",
      text: {
        100: "#D0D7DD",
        200: "#A5B1BB",
        300: "#7F8C96",
      },
    },
  },
  light: {
    id: "T_002_v4",
    name: "pastel-light",
    colors: {
      body: "#FDF6E3",
      scrollHandle: "#EEE8D5",
      scrollHandleHover: "#DDD1B8",
      primary: "#268BD2",
      secondary: "#B58900",
      text: {
        100: "#657B83",
        200: "#586E75",
        300: "#073642",
      },
    },
  },
  "blue-matrix": {
    id: "T_003_v3",
    name: "blue-matrix-futuristic",
    colors: {
      body: "#0B0C10",
      scrollHandle: "#32363B",
      scrollHandleHover: "#3D434A",
      primary: "#00FF80",
      secondary: "#00BFFF",
      text: {
        100: "#F0F0F0",
        200: "#C8C8C8",
        300: "#76FF9F",
      },
    },
  },
  espresso: {
    id: "T_004_v4",
    name: "espresso-shiny",
    colors: {
      body: "#3B3A3C",
      scrollHandle: "#5E5C5F",
      scrollHandleHover: "#4F4D50",
      primary: "#E6C497",
      secondary: "#D4A373",
      text: {
        100: "#FDFDFD",
        200: "#E8E8E8",
        300: "#B0A79E",
      },
    },
  },
  "green-goblin": {
    id: "T_005_v3",
    name: "green-goblin-subtle",
    colors: {
      body: "#121212",
      scrollHandle: "#2A2A2A",
      scrollHandleHover: "#3A3A3A",
      primary: "#AACC00",
      secondary: "#008800",
      text: {
        100: "#88FF88",
        200: "#66CC66",
        300: "#CC4444",
      },
    },
  },
  ubuntu: {
    id: "T_006_v3",
    name: "ubuntu-modern",
    colors: {
      body: "#2F1D3B",
      scrollHandle: "#C678DD",
      scrollHandleHover: "#B56ACD",
      primary: "#88C0D0",
      secondary: "#88C0D0",
      text: {
        100: "#ECEFF4",
        200: "#D8DEE9",
        300: "#A3BE8C",
      },
    },
  },
};

export default theme;
