import { Box, TextField, IconButton, Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStore } from "../hooks/useStore";

interface IHeaderForm {
  xs: string;
  sm: string;
}

const HeaderForm = observer(({ xs, sm }: IHeaderForm) => {
  const [inputValue, setInputValue] = useState("");

  const todoList = useStore();

  function handleFormSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    if (inputValue !== "") {
      todoList.addTask({
        text: inputValue,
        id: todoList.todos.length + 1,
        isFinished: false,
      });
    }
    setInputValue("");
  }

  return (
    <Box
      sx={{ width: "100%", display: { xs: xs, sm: sm }, alignItems: "center" }}
      component="form"
    >
      <TextField
        sx={{
          input: {
            backgroundColor: "primary.light",
            borderRadius: 1,
          },
        }}
        size="small"
        id="outlined-basic"
        label="Add new task"
        variant="outlined"
        fullWidth
        value={inputValue}
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <IconButton onClick={(e) => handleFormSubmit(e)}>
        <Button
          sx={{
            backgroundColor: "primary.main",
          }}
          component="span"
          size="medium"
          variant="contained"
          startIcon={<ControlPointIcon />}
        >
          Add
        </Button>
      </IconButton>
    </Box>
  );
});

export default HeaderForm;
