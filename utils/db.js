import { db } from "utils/firebase-admin"

export const getPoemData = async (id) => {
  const docRef = db.collection("poems").doc(id)
  const doc = await docRef.get()

  if (!doc.exists) {
    return null
  }

  return doc.data()
}

export const getAllPoems = async () => {
  return db
    .collection("poems")
    .get()
    .then((query) => {
      const ids = []
      query.forEach((doc) => {
        ids.push(doc.id)
      })
      return ids
    })
}
