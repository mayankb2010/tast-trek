import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  setStatus,
  addTask,
  toggleDone,
  deleteTask,
  updateTask,
  toggleHideDone,
  selectHideDone,
} from "./tasksSlice";
import { updateFirebaseDoc } from "./updateFirebaseDoc";
import { deleteFirebaseDoc } from "./deleteFirebaseDoc";
import { addFirebaseDoc } from "./addFirebaseDoc";
import { toggleFirebaseTaskDone } from "./toggleFirebaseTaskDone";
import { saveValueInLocalStorage } from "./valuesLocalStorage";

function* toggleDoneWorker({ payload }) {
  yield put(setStatus("loading"));

  const { id, done } = yield payload;
  try {
    yield call(toggleFirebaseTaskDone, id, done);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

function* addTaskWorker({ payload: data }) {
  yield put(setStatus("loading"));
  try {
    yield call(addFirebaseDoc, data, "tasks");
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

function* deleteTaskWorker({ payload: id }) {
  yield put(setStatus("loading"));
  try {
    yield call(deleteFirebaseDoc, id, "tasks");
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

function* updateTaskWorker({ payload }) {
  const { id, updatedProp } = yield payload;
  yield put(setStatus("loading"));
  try {
    yield call(updateFirebaseDoc, id, updatedProp);
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

function* saveHideDoneToLocaleStorageWorker() {
  const hideDone = yield select(selectHideDone);
  yield call(saveValueInLocalStorage, "hideDone", hideDone);
}

export function* tasksSaga() {
  yield takeEvery(addTask.type, addTaskWorker);
  yield takeEvery(toggleDone.type, toggleDoneWorker);
  yield takeEvery(deleteTask.type, deleteTaskWorker);
  yield takeEvery(updateTask.type, updateTaskWorker);
  yield takeEvery(toggleHideDone.type, saveHideDoneToLocaleStorageWorker);
}
