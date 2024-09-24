import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

export const addFirebaseDoc = async (data, collectionName) => {
  await addDoc(collection(db, collectionName), data);
};
