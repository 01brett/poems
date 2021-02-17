import { db } from "util/firebase-admin"

export const getPoemData = async (id) => {
  const docRef = db.collection("poems").doc(id)
  const doc = await docRef.get()

  if (!doc.exists) {
    return null
  }

  return doc.data()
}
