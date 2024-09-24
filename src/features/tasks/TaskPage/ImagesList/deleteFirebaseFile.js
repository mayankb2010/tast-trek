import { deleteObject, ref } from "firebase/storage";
import { auth, storage } from "../../../../config/firebase";

export const deleteFirebaseFile = async (folder, name) => {
  const fileRef = ref(storage, `${folder}/${auth.currentUser.uid}/${name}`);
  await deleteObject(fileRef);
};
