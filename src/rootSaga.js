import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/tasksSaga";
import { imagesSaga } from "./features/tasks/imagesSaga";

export default function* rootSaga() {
  yield all([tasksSaga(), imagesSaga()]);
}
