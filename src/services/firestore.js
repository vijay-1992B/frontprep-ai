import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../firebase";

export const saveUserDetails = async () => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("User is not authenticated");
    }

    const userRef = doc(db, "users", user.uid);

    await setDoc(userRef, {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
    });
  } catch (error) {
    console.error("Firestore error:", error);
  }
};

export const addInterview = async (formData, data) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("User is not authenticated");
    }

    const interviewsRef = collection(db, "users", user.uid, "interviews");

    const { topic, difficulty, questions, interviewType } = formData;
    const interviewRef = await addDoc(interviewsRef, {
      topic: topic,
      difficulty: difficulty,
      questionCount: questions,
      interviewType: interviewType,
      status: "in-progress",
      createdAt: new Date(),
    });

    const questionRef = collection(interviewRef, "questions");

    await Promise.all(
      data.map((question) =>
        setDoc(doc(questionRef, String(question.id)), {
          questionId: question.id,
          question: question.question,
          expectedAnswer: question.answer,
        }),
      ),
    );
    return interviewRef.id;
  } catch (error) {
    console.error("Firestore error:", error);
  }
};

export const getUserInterviews = async () => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User is not authenticated");
  }

  const interviewsRef = collection(db, "users", user.uid, "interviews");

  const q = query(interviewsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
