import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../../../common/Container/styled";
import { auth } from "../../../config/firebase";
import { setIsLoading } from "../authSlice";
import {
  AuthButton,
  AuthForm,
  AuthHeading,
  AuthInput,
  AuthSection,
} from "../AuthStyled";
import { FlexWrapper } from "./styled";

const ResetPage = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resetPassword = async (event) => {
    event.preventDefault();

    dispatch(setIsLoading(true));
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Check email reset password.");
      navigate("/login");
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
      if (error.code === "auth/user-not-found") {
        toast.error("Account with this email doesn't exist");
      }
    }
  };

  return (
    <Container auth>
      <AuthSection>
        <AuthHeading>Reset Password</AuthHeading>
        <AuthForm onSubmit={resetPassword}>
          <AuthInput
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="Email..."
            required
          />
          <AuthButton>Reset Password</AuthButton>
        </AuthForm>
        <FlexWrapper>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </FlexWrapper>
      </AuthSection>
    </Container>
  );
};

export default ResetPage;
