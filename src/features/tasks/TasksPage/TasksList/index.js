import { useDispatch, useSelector } from "react-redux";
import {
  selectHideDone,
  selectStatus,
  selectTaskByQuery,
  setTasks,
} from "../../tasksSlice";
import { Tasks, Task, Content, StyledLink, DeadlineDate } from "./styled";
import { toggleDone } from "../../tasksSlice";
import { useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import enUS from "date-fns/locale/en-US";
import EditContent from "../../EditContent";
import { useEffect } from "react";
import useFirestore from "../../useFirestore";
import DeleteTask from "./DeleteTask";
import { TaskButton } from "./TaskButton";

const TasksList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("szukaj");
  const { docs } = useFirestore("tasks");

  const tasks = useSelector((state) => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const status = useSelector(selectStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(docs));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docs]);

  return (
    tasks && (
      <Tasks>
        {tasks.map((task) => {
          const deadline = task.deadline;

          return (
            <Task key={task.id} hiden={task.done && hideDone}>
              <TaskButton
                disabled={status === "loading"}
                done={task.done}
                onClick={() =>
                  dispatch(toggleDone({ id: task.id, done: task.done }))
                }
              />

              <Content done={task.done}>
                <StyledLink to={`/tasks/${task.id}`}>{task.content}</StyledLink>
              </Content>

              {deadline && (
                <DeadlineDate>
                  Finish by{" "}
                  {format(Date.parse(deadline), "do 'of' MMMM yyyy", {
                    locale: enUS,
                  })}
                </DeadlineDate>
              )}

              <EditContent task={task} />

              <DeleteTask task={task} />
            </Task>
          );
        })}
      </Tasks>
    )
  );
};

export default TasksList;
