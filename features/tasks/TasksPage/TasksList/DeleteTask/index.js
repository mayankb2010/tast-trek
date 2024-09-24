import { useDispatch, useSelector } from "react-redux";
import { deleteFirebaseDocsByTask } from "./deleteFirebaseDocsByTask";
import { deleteFirebaseFilesByTask } from "./deleteFirebaseFilesByTask";
import { selectImagesByTaskId } from "../../../imagesSlice";
import { deleteTask, selectStatus } from "../../../tasksSlice";
import { TaskButton } from "../TaskButton";

const DeleteTask = ({ task }) => {
  const taskId = task.id;
  const imagesToDelete = useSelector((state) =>
    selectImagesByTaskId(state, taskId)
  );

  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  const onDeleteTask = () => {
    dispatch(deleteTask(taskId));

    deleteFirebaseFilesByTask("images", imagesToDelete);
    deleteFirebaseDocsByTask("images", imagesToDelete);
  };
  return (
    <TaskButton
      disabled={status === "loading"}
      remove={true}
      onClick={onDeleteTask}
    />
  );
};

export default DeleteTask;
