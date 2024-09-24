import { format } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { InfoText } from "../InfoText";

const TaskDate = ({ task }) => {
  const date = Date.parse(task.date);
  const formatedDate = format(date, "do 'of' MMMM yyyy',' HH:mm:ss", {
    locale: enUS,
  });

  return <InfoText>Created: {formatedDate}</InfoText>;
};

export default TaskDate;
