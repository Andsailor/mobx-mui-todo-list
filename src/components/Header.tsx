import {
  AppBar,
  Box,
  Icon,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import HeaderForm from "./HeaderForm";

interface HeaderProps {
  toggleTheme: (theme: string) => void;
  theme: string;
}

const Header = ({ toggleTheme, theme }: HeaderProps) => {
  const toggleThemeButton =
    theme === "light" ? <DarkModeIcon /> : <WbSunnyIcon />;
  return (
    <AppBar sx={{ backgroundColor: "primary.dark" }} position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(1.4rem, 6vw, 1.7rem)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Icon
            color="action"
            sx={{ marginRight: 1.5, color: "primary.light" }}
          >
            <FormatListBulletedRoundedIcon />
          </Icon>
          Todo App
        </Typography>
        <Box
          sx={{
            width: { sm: "70%", md: "60%" },
            display: "flex",
            justifyContent: "end",
          }}
        >
          <HeaderForm xs="none" sm="flex" />
          <Tooltip title={theme === "light" ? "dark theme" : "light theme"}>
            <IconButton
              sx={{ color: "primary.light" }}
              onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
            >
              {toggleThemeButton}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
