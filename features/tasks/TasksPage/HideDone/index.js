import { useDispatch, useSelector } from "react-redux";
import { selectHideDone, selectIsThereAnyTask } from "../../tasksSlice";
import { Wrapper } from "./styled";
import { Button } from "../../../../common/Button";
import { toggleHideDone } from "../../tasksSlice";

const HideDone = () => {
  const hideDone = useSelector(selectHideDone);
  const isThereAnyTask = useSelector(selectIsThereAnyTask);
  const dispatch = useDispatch();

  return (
    isThereAnyTask && (
      <Wrapper>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Show done" : "Hide done"}
        </Button>
      </Wrapper>
    )
  );
};

export default HideDone;
