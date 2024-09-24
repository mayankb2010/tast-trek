import { serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { useEffect } from "react";
import { v4 } from "uuid";
import { auth, storage } from "../../../../config/firebase";
import { addFirebaseDoc } from "../../addFirebaseDoc";

const useStorage = (file, folder, taskId) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!file) return;

    const uniqueName = `${file.name}${v4()}`;
    const storageRef = ref(
      storage,
      `${folder}/${auth.currentUser.uid}/${uniqueName}`
    );

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError(true);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setUrl(url);
        taskId &&
          (await addFirebaseDoc(
            {
              url,
              taskId,
              userId: auth.currentUser.uid,
              createdAt: serverTimestamp(),
              name: uniqueName,
            },
            "images"
          ));
      }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
