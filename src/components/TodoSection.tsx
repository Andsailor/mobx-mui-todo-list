import {
  List,
  ListItem,
  Checkbox,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Fade,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";

const TodoSection = observer(() => {
  const todoList = useStore();

  function handleOnCheckboxClick(id: number) {
    todoList.toggleIsFinished(id);
  }

  function handleOnDeleteButtonClick(id: number) {
    todoList.deleteTask(id);
  }
  return (
    <List>
      {todoList.todos.map((todo, i) => {
        return (
          <Fade key={i} in={true}>
            <ListItem
              divider
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "0.5rem", sm: "1rem" },
                  alignItems: "center",
                }}
              >
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: { xs: 20, sm: 28 } },
                  }}
                  onClick={() => {
                    handleOnCheckboxClick(todo.id);
                  }}
                  checked={todo.isFinished}
                />
                <Typography
                  sx={{
                    fontSize: "clamp(1rem, 5vw, 1.5rem)",
                    textDecoration: `${
                      todo.isFinished ? "line-through" : "none"
                    }`,
                    color: `${todo.isFinished && "primary.main"}`,
                  }}
                >
                  {todo.text}
                </Typography>
              </Box>
              <Tooltip title="delete task">
                <IconButton
                  sx={{
                    "& svg": {
                      fontSize: { xs: 23, sm: 28 },
                    },
                  }}
                  onClick={() => {
                    handleOnDeleteButtonClick(todo.id);
                  }}
                  size="large"
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </ListItem>
          </Fade>
        );
      })}
    </List>
  );
});

export default TodoSection;
