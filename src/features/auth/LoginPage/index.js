import Container from "../../../common/Container/styled";
import { AiOutlineGoogle } from "react-icons/ai";
import { Text } from "./styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AuthSection,
  AuthHeading,
  AuthForm,
  AuthInput,
  AuthButton,
  AuthMessage,
} from "../AuthStyled";
import useFirebaseLogin from "./service";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser, signInWithGoogle } = useFirebaseLogin();

  return (
    <Container auth>
      <AuthSection>
        <AuthHeading>Login</AuthHeading>
        <AuthForm onSubmit={() => loginUser({ email, password })}>
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
          />
          <AuthButton>Login</AuthButton>
          <AuthButton
            type="button"
            onClick={() =>
              loginUser({
                email: "test_app@test.com",
                password: "Testing123!",
              })
            }
          >
            Demo User
          </AuthButton>
        </AuthForm>
        <Text>
          <Link to="/reset">Forgot Password?</Link>
        </Text>
        <AuthButton onClick={signInWithGoogle} google>
          <AiOutlineGoogle size={20} /> Sign In With Google
        </AuthButton>
        <AuthMessage>
          Don't have an account? <Link to="/register">Register</Link>
        </AuthMessage>
      </AuthSection>
    </Container>
  );
};

export default LoginPage;
