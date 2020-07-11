import db from '../api/db'

import Head from '../../components/HTMLHead'
import Header from '../../components/Header'
import Shared from '../../components/Shared'

export default function Share({ data }) {
  return (
    <>
      <Head title={data.poem[0].text} />
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
