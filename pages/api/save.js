import db from './db'

export default async function save(req, res) {
  var { poem, clicks } = req.body
  if (!poem) {
    return res.status(400).json({ error: 'Missing data' })
  }
  if (poem.length < 1 || poem.length > 5) {
    return res.status(400).json({ error: 'Incorrect data' })
  }

  try {
    var {
      inserted: [newid]
    } = await db.add({
      poem,
      clicks
    })

    if (newid) {
      var [ret] = await db.match({ id: newid })
      res.json(ret)
    } else {
      res.status(500).json({ error: 'Server error' })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
}
