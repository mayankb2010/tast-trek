import { DateInput, Text } from "./styled";
import { Wrapper } from "../../../../common/Wrapper";
import { useDispatch } from "react-redux";
import { updateTask } from "../../tasksSlice";

const Deadline = ({ task }) => {
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    dispatch(
      updateTask({ id: task.id, updatedProp: { deadline: target.value } })
    );
  };

  return (
    <Wrapper>
      <label>
        <Text>Set deadline</Text>
        <DateInput
          value={task.deadline}
          onChange={onInputChange}
          name="date"
          type="datetime-local"
        />
      </label>
    </Wrapper>
  );
};

export default Deadline;
