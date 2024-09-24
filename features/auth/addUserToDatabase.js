import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { createNameFromEmail } from "./createNameFromEmail";

export const addUserToDatabase = async (user) => {
  await setDoc(doc(db, "users", user.uid), {
    accessToken: user.accessToken,
    email: user.email,
    photoURL: user.photoURL,
    phoneNumber: user.phoneNumber,
    displayName: user.displayName
      ? user.displayName
      : createNameFromEmail(user.email),
    userId: user.uid,
    createdAt: serverTimestamp(),
  });
};
