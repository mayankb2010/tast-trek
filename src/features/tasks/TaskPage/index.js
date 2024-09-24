import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Wrapper } from "../../../common/Wrapper";
import { selectTaskById, setTasks } from "../tasksSlice";
import Deadline from "./Deadline";
import EditContent from "../EditContent";
import NotesArea from "./NotesArea";
import TaskDate from "./TaskDate";
import TimeLeft from "./TimeLeft";
import AddFileForm from "./AddFileForm";
import useFirestore from "../useFirestore";
import ImagesList from "./ImagesList";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => selectTaskById(state, id));
  const { docs } = useFirestore("tasks");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(docs));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docs]);

  return (
    <Container
      as={motion.div}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {task && (
        <>
          <Header heading="Task details" optionalContent={true} />
          <Section
            header={task.content}
            optionalElement={<EditContent task={task} />}
            content={
              <Wrapper>
                <strong>Done:</strong> {task.done ? "Yes" : "No"}
              </Wrapper>
            }
            optionalContent={<TaskDate task={task} />}
          />

          <Section
            header="Deadline"
            content={<Deadline task={task} />}
            optionalContent={task.deadline && <TimeLeft task={task} />}
          />

          <Section header="Notes" content={<NotesArea task={task} />} />

          <Section
            header="Storage"
            content={<ImagesList taskId={task.id} />}
            optionalContent={<AddFileForm taskId={task.id} />}
          />
        </>
      )}
    </Container>
  );
};

export default TaskPage;
