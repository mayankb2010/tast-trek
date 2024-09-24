import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  const tasksRef = collection(db, collectionName);

  useEffect(() => {
    const queryTasks = query(
      tasksRef,
      where("userId", "==", auth.currentUser.uid),
      orderBy("createdAt")
    );
    const unsub = onSnapshot(queryTasks, (snapshot) => {
      let docData = [];

      snapshot.forEach((doc) => {
        docData.push({ ...doc.data(), id: doc.id });
      });
      setDocs(docData);
    });

    return () => unsub();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
