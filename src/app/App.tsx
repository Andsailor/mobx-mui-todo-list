import { Box, Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "../hooks/useTheme";

import Header from "../components/Header";
import TrackerSection from "../components/TrackerSection";
import TodoSection from "../components/TodoSection";
import HeaderForm from "../components/HeaderForm";

const App = () => {
  const { theme, toggleTheme, mode } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        sx={{
          backgroundColor: "primary.light",
          height: "100vh",
        }}
        maxWidth="lg"
      >
        <Header theme={mode} toggleTheme={toggleTheme} />
        <Box sx={{ px: { xs: "1rem", sm: "2rem" }, my: "2rem" }}>
          <Box
            sx={{
              mt: "-1rem",
              mb: "1.5rem",
              display: { xs: "block", sm: "none" },
            }}
          >
            <HeaderForm xs="flex" sm="none" />
          </Box>
          <TrackerSection />
          <TodoSection />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
