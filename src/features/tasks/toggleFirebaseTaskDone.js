import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const toggleFirebaseTaskDone = async (id, done) => {
  await updateDoc(doc(db, "tasks", id), {
    done: !done,
  });
};
