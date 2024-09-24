import { useState, useRef } from "react";
import { StyledForm, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import { Input } from "../Input";
import { Wrapper } from "../../../../common/Wrapper";
import { serverTimestamp } from "firebase/firestore";
import { auth } from "../../../../config/firebase";

const AddTaskForm = () => {
  const [taskContent, setTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const focusInput = () => inputRef.current.focus();

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const contentTrimmed = taskContent.trim();

    if (contentTrimmed) {
      dispatch(
        addTask({
          userId: auth.currentUser.uid,
          content: contentTrimmed,
          noteContent: "",
          done: false,
          createdAt: serverTimestamp(),
          date: Date(serverTimestamp()),
          deadline: "",
        })
      );
    }

    setTaskContent("");
    focusInput();
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={onFormSubmit}>
        <Input
          ref={inputRef}
          placeholder="New task..."
          value={taskContent}
          onChange={({ target }) => setTaskContent(target.value)}
        />
        <Button>Add new task</Button>
      </StyledForm>
    </Wrapper>
  );
};

export default AddTaskForm;
