import { db } from "util/firebase-admin"

export default async function save(req, res) {
  var { poem, clicks } = req.body
  // data validation top level
  if (
    !clicks ||
    !poem ||
    !Array.isArray(poem) ||
    typeof clicks !== "number" ||
    poem.length < 2 ||
    poem.length > 5
  ) {
    return res.status(400).json({ error: "Missing data" })
  }
  // data validation poem
  for (var el of poem) {
    if (
      !el.tweet_id ||
      !el.text ||
      typeof el.tweet_id !== "number" ||
      typeof el.text !== "string"
    ) {
      return res.status(400).json({ error: "Incorrect data" })
    }
  }

  try {
    const { id } = await db.collection("poems").add({
      poem,
      clicks
    })
    if (id) {
      res.json({ id })
    } else {
      res.status(500).json({ error: "Server error" })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
}
