import { deleteObject, ref } from "firebase/storage";
import { auth, storage } from "../../../../../config/firebase";

export const deleteFirebaseFilesByTask = async (folder, images) => {
  await images.forEach((image) => {
    const fileRef = ref(
      storage,
      `${folder}/${auth.currentUser.uid}/${image.name}`
    );
    deleteObject(fileRef);
  });
};
