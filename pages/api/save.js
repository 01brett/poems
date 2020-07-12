import db from './db'

export default async function save(req, res) {
  var { poem, clicks } = req.body
  // data validation top level
  if (
    !clicks ||
    !poem ||
    !Array.isArray(poem) ||
    typeof clicks !== 'number' ||
    poem.length < 2 ||
    poem.length > 5
  ) {
    return res.status(400).json({ error: 'Missing data' })
  }
  // data validation poem
  for (var el of poem) {
    if (
      !el.tweet_id ||
      !el.text ||
      typeof el.tweet_id !== 'number' ||
      typeof el.text !== 'string'
    ) {
      return res.status(400).json({ error: 'Incorrect data' })
    }
  }
  // let's save it
  try {
    // save poem to db, returns id
    var {
      inserted: [id]
    } = await db.add({ poem, clicks })
    // retrieve poem from db by ^^above id, send to client
    if (id) {
      var [userPoem] = await db.match({ id })
      res.json(userPoem)
    } else {
      res.status(500).json({ error: 'Server error' })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
}
