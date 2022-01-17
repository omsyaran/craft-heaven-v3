import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBE4YENtriHkVh5Gbucyy4ipINyIzR4RHk",
  authDomain: "crafthaven-om.firebaseapp.com",
  databaseURL:
    "https://crafthaven-om-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "crafthaven-om",
  storageBucket: "crafthaven-om.appspot.com",
  messagingSenderId: "882716555478",
  appId: "1:882716555478:web:0d22bf90b572b4cf4d7177",
  measurementId: "G-09BKG4H6KF",
};

export const initilizeFirebase = () => {
  const app = initializeApp(firebaseConfig);
};

const app = initilizeFirebase();
const storage = getStorage();
export async function upload(file, seller) {
  const fileRef = ref(storage, "StorePhoto/" + seller.uid + ".jpg"); // the ref over here is from the database one. not the storage one
  const snapshot = await uploadBytes(fileRef, file);
  alert("Photo uploaded!");
}

// kathe punya
/* const firebaseConfig = {
  apiKey: "AIzaSyDUhrMTlBeGNj16YJMrGXtW6IWmSFhnodQ",
  authDomain: "crafthaven-856e9.firebaseapp.com",
  databaseURL: "https://crafthaven-856e9-default-rtdb.firebaseio.com",
  projectId: "crafthaven-856e9",
  storageBucket: "crafthaven-856e9.appspot.com",
  messagingSenderId: "675571869187",
  appId: "1:675571869187:web:0ad4e4f9f70cbd27fcd036",
  measurementId: "G-D28982HHMF",
};
*/
