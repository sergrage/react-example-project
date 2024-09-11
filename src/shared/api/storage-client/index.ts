import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

// 'file' comes from the Blob or File API
export const uploadFile = async (file: File): Promise<string> => {
    const storageRef = ref(storage, file.name);
    const snapshot =  await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref)
  }