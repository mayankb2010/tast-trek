import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const deleteFirebaseDoc = async (id, collectionName) => {
  await deleteDoc(doc(db, collectionName, id));
};
