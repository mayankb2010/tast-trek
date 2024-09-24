import { formatDistanceStrict, isBefore } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { useEffect, useState } from "react";

const useTimeLeft = (task) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const deadlineDate = task.deadline
    ? task.deadline
    : new Date();

  useEffect(() => {
    const dateIntervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(dateIntervalId);
  }, [currentDate]);

  const formattedTimeLeft = formatDistanceStrict(
    Date.parse(currentDate),
    Date.parse(deadlineDate),
    {
      locale: enUS,
      includeSeconds: true,
    }
  );

  const isPassedDeadline = isBefore(Date.parse(deadlineDate), new Date());

  return [formattedTimeLeft, isPassedDeadline];
};

export { useTimeLeft };
