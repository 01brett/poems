import { db } from "util/firebase-admin"

export const getPoemData = async (uid) => {
  const docRef = db.collection("poems").doc(uid)
  const doc = await docRef.get()

  if (!doc.exists) {
    return null
  }

  return doc.data()
}
