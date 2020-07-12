import db from '../api/db'

import Head from '../../components/HTMLHead'
import Header from '../../components/Header'
import Shared from '../../components/Shared'

export default function Share({ data }) {
  var title = data.poem[0].text
  var desc = data.poem.reduce((acc, v) => {
    return acc + v.text + ' '
  }, '')

  return (
    <>
      <Head title={title} desc={desc} />
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
