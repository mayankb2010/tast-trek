import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../../../common/Container/styled";
import { auth } from "../../../config/firebase";
import { addUserToDatabase } from "../addUserToDatabase";
import { selectIsLoading, setIsLoading } from "../authSlice";
import {
  AuthButton,
  AuthForm,
  AuthHeading,
  AuthInput,
  AuthMessage,
  AuthSection,
} from "../AuthStyled";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const registerUser = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match.");
      return;
    }

    dispatch(setIsLoading(true));

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Account Registered.");

      dispatch(setIsLoading(false));
      addUserToDatabase(user);
    } catch (error) {
      dispatch(setIsLoading(false));

      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        toast.error("User with this email arleady exists");
      }
    }
  };

  return (
    <Container auth>
      <AuthSection>
        <AuthHeading>Register</AuthHeading>
        <AuthForm onSubmit={registerUser}>
          <AuthInput
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="Email..."
            required
          />
          <AuthInput
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="Password..."
            required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$"
            title="Minimum password requirements: 8 characters, 1 number, 1 lowercase letter, and 1 uppercase letter."
          />
          <AuthInput
            value={passwordConfirm}
            onChange={({ target }) => setPasswordConfirm(target.value)}
            type="password"
            placeholder="Confirm Password..."
            required
          />
          <AuthButton disabled={isLoading}>Register</AuthButton>
        </AuthForm>
        <AuthMessage>
          Already have an account? <Link to="/login">Login</Link>
        </AuthMessage>
      </AuthSection>
    </Container>
  );
};

export default RegisterPage;
