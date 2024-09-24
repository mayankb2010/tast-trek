import { call, put, takeEvery } from "redux-saga/effects";
import {
  deleteImage,
  deleteImageError,
  deleteImageSuccess,
} from "./imagesSlice";
import { deleteFirebaseDoc } from "./deleteFirebaseDoc";
import { deleteFirebaseFile } from "./TaskPage/ImagesList/deleteFirebaseFile";

function* deleteImageWorker({ payload }) {
  const { imageId, name } = yield payload;
  try {
    yield call(deleteFirebaseDoc, imageId, "images");
    yield call(deleteFirebaseFile, "images", name);
    yield put(deleteImageSuccess());
  } catch (error) {
    yield put(deleteImageError());
  }
}

export function* imagesSaga() {
  yield takeEvery(deleteImage.type, deleteImageWorker);
}
