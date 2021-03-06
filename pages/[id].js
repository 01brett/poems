import { getPoemData, getAllPoems } from "utils/db"

import Topper from "../components/Topper"
import Shared from "../components/Shared"

export default function Share({ data }) {
  var title = data ? data.poem[0].text : "Poem not found"
  var fullPoem = data
    ? data.poem.reduce((acc, val) => {
        if (!acc) {
          return acc + val.text
        }
        return acc + " " + val.text
      }, "")
    : "Poem not found"

  return (
    <Topper title={title} fullPoem={fullPoem}>
      <Shared data={data} />
    </Topper>
  )
}

export async function getStaticProps({ params }) {
  const { id } = params
  const data = await getPoemData(id)

  if (data) {
    return {
      props: { data }
    }
  }
  return {
    props: {}
  }
}

export async function getStaticPaths() {
  const ids = await getAllPoems()
  const paths = ids.map((id) => ({
    params: { id }
  }))

  return {
    paths,
    fallback: "blocking"
  }
}
