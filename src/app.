import TodoList from "./features/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {
  removeActiveUser,
  selectIsLoading,
  setActiveUser,
  setIsLoading,
} from "./features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "./config/firebase";
import Loader from "./common/Loader";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(setIsLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setActiveUser(user));
        navigate("/tasks");
        dispatch(setIsLoading(false));
      } else {
        dispatch(removeActiveUser());
        dispatch(setIsLoading(false));
        navigate("/login");
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <ToastContainer
        autoClose={2500}
        limit={3}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
      <TodoList />
    </>
  );
};

export default App;
