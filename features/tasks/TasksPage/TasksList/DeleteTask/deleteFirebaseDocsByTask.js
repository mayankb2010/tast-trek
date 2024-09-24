import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../../config/firebase";

export const deleteFirebaseDocsByTask = async (collectionName, images) => {
  await images.forEach((image) => {
    deleteDoc(doc(db, collectionName, image.id));
  });
};
