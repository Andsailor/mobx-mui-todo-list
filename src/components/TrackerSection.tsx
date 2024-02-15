import { Box, Chip } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";

const TrackerSection = observer(() => {
  const todoList = useStore();

  const numberOfFinishedTasks = todoList.todos.filter(
    (todo) => todo.isFinished
  ).length;
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Chip
        sx={{
          fontSize: "clamp(1rem, 3vw, 1.2rem)",
          padding: ".5rem",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        }}
        label={`All tasks: ${todoList.todos.length}`}
      ></Chip>
      <Chip
        sx={{
          fontSize: "clamp(1rem, 3vw, 1.2rem)",
          padding: ".5rem",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        }}
        label={`Done: ${numberOfFinishedTasks}`}
      ></Chip>
    </Box>
  );
});

export default TrackerSection;
