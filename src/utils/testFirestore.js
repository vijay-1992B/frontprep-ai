import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const testFirestore = async () => {
  try {
    const docRef = await addDoc(collection(db, "test"), {
      message: "Hello from FrontPrep AI",
      createdAt: new Date(),
    });

    console.log("Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Firestore error:", error);
  }
};
