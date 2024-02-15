import { PaletteMode, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";

export const useTheme = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: grey[400],
              light: grey[300],
              dark: grey[500],
              contrastText: "#000",
            },

            background: {
              default: grey[200],
            },
          }
        : {
            primary: {
              main: grey[600],
              light: grey[500],
              dark: grey[800],
              contrastText: "#fff",
            },

            background: {
              default: grey[700],
            },
          }),
    },
  });

  const theme = createTheme(getDesignTokens(mode));

  function toggleTheme() {
    setMode(mode === "light" ? "dark" : "light");
  }

  return {
    theme,
    toggleTheme,
    mode,
  };
};
