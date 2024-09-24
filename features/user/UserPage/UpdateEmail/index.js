import { useState } from "react";
import { Wrapper } from "../../../../common/Wrapper";
import { FormText, Input } from "../UserStyled";
import { toast } from "react-toastify";
import { auth } from "../../../../config/firebase";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
} from "firebase/auth";
import { Button } from "../../../../common/Button";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../../auth/authSlice";

const UpdateEmail = () => {
  const [currentPassowrd, setCurrentPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const onFormSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassowrd
    );

    try {
      await reauthenticateWithCredential(user, credential);
      await updateEmail(user, newEmail);

      dispatch(
        setActiveUser({
          ...user,
          email: newEmail,
        })
      );
      setNewEmail("");
      setCurrentPassword("");
      toast.success("Email changed");
      setIsLoading(false);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast.error("Wrong password");
        setIsLoading(false);
      }
    }
  };

  return (
    <Wrapper>
      <form onSubmit={onFormSubmit}>
        <p>
          <label>
            <FormText>Current password</FormText>
            <Input
              value={currentPassowrd}
              onChange={({ target }) => setCurrentPassword(target.value)}
              placeholder="Current password..."
              type="password"
              required
            />
          </label>
        </p>
        <p>
          <label>
            <FormText>New email</FormText>
            <Input
              value={newEmail}
              onChange={({ target }) => setNewEmail(target.value)}
              placeholder="New email..."
              type="email"
              required
            />
          </label>
        </p>
        <Button strong disabled={isLoading}>
          Update email
        </Button>
      </form>
    </Wrapper>
  );
};

export default UpdateEmail;
