import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../../firebase";

const useStorage = (file, title, description, onClose) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!file) {
      setError(new Error("File is null"));
      return;
    }

    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const downloadUrl = await storageRef.getDownloadURL();
        const createdAt = timestamp();

        await collectionRef.add({
          title,
          description,
          url: downloadUrl,
          createdAt,
        });

        setUrl(downloadUrl);
        onClose();
      }
    );
  }, [file, title, description, onClose]);

  return { progress, url, error };
};

export default useStorage;
