import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../config/firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../authSlice";
import { addUserToDatabase } from "../addUserToDatabase";

const useFirebaseLogin = () => {
  const dispatch = useDispatch();

  const loginUser = async (credentials) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      dispatch(setIsLoading(false));
      toast.success("You're Logged In.");
    } catch (error) {
      dispatch(setIsLoading(false));
      const errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        toast.error("Wrong email or password.");
      } else if (errorCode === "auth/user-not-found") {
        toast.error("This account does not exist");
      }
    }
  };

  const signInWithGoogle = async () => {
    dispatch(setIsLoading(true));

    try {
      const { user } = await signInWithPopup(auth, provider);
      toast.success("You're Logged In.");

      addUserToDatabase(user);
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
    }
  };

  return { loginUser, signInWithGoogle };
};

export default useFirebaseLogin;
