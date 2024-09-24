import AddTaskForm from "./AddTaskForm";
import TasksList from "./TasksList";
import HideDone from "./HideDone";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container/styled";
import SearchTasks from "./SearchTasks";
import { motion } from "framer-motion";
import { variants } from "../../../common/motionVariants";

function TasksPage() {
  return (
    <Container
      as={motion.div}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Header heading="Todo List" />
      <Section header="Add new task" content={<AddTaskForm />} />
      <Section header="Search" content={<SearchTasks />} />
      <Section
        header="Tasks"
        optionalContent={<HideDone />}
        content={<TasksList />}
      />
    </Container>
  );
}

export default TasksPage;
