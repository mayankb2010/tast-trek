import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import authReducer from "./features/auth/authSlice";
import imagesReduced from "./features/tasks/imagesSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
    images: imagesReduced,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
