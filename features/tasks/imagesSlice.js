import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    status: "idle",
  },
  reducers: {
    setImages: (state, { payload: images }) => {
      state.images = images;
    },
    deleteImage: (state) => {
      state.status = "loading";
    },
    deleteImageSuccess: (state) => {
      state.status = "success";
    },
    deleteImageError: (state) => {
      state.status = "error";
    },
  },
});

export const { setImages, deleteImage, deleteImageSuccess, deleteImageError } =
  imagesSlice.actions;

const selectImagesState = (state) => state.images;
export const selectImages = (state) => selectImagesState(state).images;
export const selectImagesByTaskId = (state, taskId) => {
  if (!taskId) {
    return [];
  }

  return selectImages(state).filter((image) => image.taskId === taskId);
};
export const selectImagesStatus = (state) => selectImagesState(state).status;

export default imagesSlice.reducer;
