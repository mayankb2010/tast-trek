import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../features/auth/authSlice";
import Container from "../Container/styled";
import { NotFoundPageSection, GoBackLink } from "./styled";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      isLoggedIn ? navigate("/tasks") : navigate("/login");
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigate, isLoggedIn]);

  return (
    <Container>
      <NotFoundPageSection>
        <p>Ooops...There is no such page 😥</p>
        <p>
          We'll redirect you back to {isLoggedIn ? "tasks" : "login page"} in a
          moment 😄
        </p>
        <p>
          {isLoggedIn ? (
            <GoBackLink to="/tasks">Go back to tasks</GoBackLink>
          ) : (
            <GoBackLink to="/login">Go to login page</GoBackLink>
          )}
        </p>
      </NotFoundPageSection>
    </Container>
  );
};

export default NotFoundPage;
