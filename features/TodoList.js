import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../common/Navbar";
import NotFoundPage from "../common/NotFoundPage";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import ResetPage from "./auth/ResetPage";
import AuthorPage from "./author/AuthorPage";
import TaskPage from "./tasks/TaskPage";
import TasksPage from "./tasks/TasksPage";
import RequireAuth from "../common/RequireAuth";
import UserPage from "./user/UserPage";
import { AnimatePresence } from "framer-motion";

function TodoList() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset" element={<ResetPage />} />
          <Route
            path="/tasks"
            element={
              <RequireAuth>
                <TasksPage />
              </RequireAuth>
            }
          />
          <Route
            path="/tasks/:id"
            element={
              <RequireAuth>
                <TaskPage />
              </RequireAuth>
            }
          />
          <Route path="/author" element={<AuthorPage />} />
          <Route
            path="user"
            element={
              <RequireAuth>
                <UserPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default TodoList;
