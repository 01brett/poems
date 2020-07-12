import Unbounded from '@unbounded/unbounded'

var client = new Unbounded(
  'aws-us-west-1',
  process.env.UNB_EMAIL,
  process.env.UNB_PW
)
var db = client.database(process.env.UNB_DB)

export default db
