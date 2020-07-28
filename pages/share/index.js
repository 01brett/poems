import db from '../api/db'

import Head from '../../components/HTMLHead'
import Shared from '../../components/Shared'

export default function Share({ data }) {
  var firstLine = data && data.poem[0].text
  var fullPoem =
    data &&
    data.poem.reduce((acc, val) => {
      if (!acc) {
        return acc + val.text
      }
      return acc + ' ' + val.text
    }, '')

  return (
    <Head firstLine={firstLine} fullPoem={fullPoem}>
      <Shared data={data} />
    </Head>
  )
}

export async function getServerSideProps({ query }) {
  var uid = query.q
  var [data] = await db.match({ uid })
  return {
    props: { data: data ? data : null }
  }
}
