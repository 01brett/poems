import db from '../api/db'

import Head from '../../components/HTMLHead'
import Header from '../../components/Header'
import Shared from '../../components/Shared'

export default function Share({ data }) {
  var firstLine = data.poem[0].text
  var fullPoem = data.poem.reduce((acc, val) => {
    return acc.text + '. ' + val.text
  })

  return (
    <>
      <Head firstLine={firstLine} fullPoem={fullPoem} />
      <Header>
        <Shared data={data} />
      </Header>
    </>
  )
}

export async function getServerSideProps({ query }) {
  var id = query.q
  var [data] = await db.match({ id })
  return {
    props: { data }
  }
}
