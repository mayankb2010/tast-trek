import { TimePassedInfo, TaskNotDoneInfo, TaskDoneInfo } from "./styled";
import { InfoText } from "../InfoText";
import { useTimeLeft } from "./useTimeLeft";

const TimeLeft = ({ task }) => {
  const [timeLeft, isPassedDeadline] = useTimeLeft(task);

  return !isPassedDeadline ? (
    <InfoText>Time left: {timeLeft}</InfoText>
  ) : (
    <div>
      <TimePassedInfo>Deadline passed:</TimePassedInfo>
      {task.done ? (
        <TaskDoneInfo>Done</TaskDoneInfo>
      ) : (
        <TaskNotDoneInfo>Not done</TaskNotDoneInfo>
      )}
    </div>
  );
};

export default TimeLeft;
