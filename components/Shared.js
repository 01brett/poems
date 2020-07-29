import Link from 'next/link'

import Tweet from './Tweet'
import Poem from './Poem'
import Message from './Message'

export default function Shared({ data }) {
  if (!data) {
    return (
      <Message text="Poem not found. Is there a typo in the url?" error>
        <Link href="/">
          <a>
            <span role="img" aria-label="cartoon house">
              🏠{' '}
            </span>
            Return Home
          </a>
        </Link>
      </Message>
    )
  }

  return (
    <>
      <Tweet />
      <Poem poem={data.poem} />
      <p className="clicks">
        Poem constructed in {data.clicks} {data.clicks > 1 ? 'clicks' : 'click'}
        .
      </p>
      <Link href="/">
        <a>
          <span role="img" aria-label="new icon">
            🆕{' '}
          </span>
          Make a Poem
        </a>
      </Link>
      <style jsx>{`
        .clicks {
          color: var(--grey2);
          margin-bottom: var(--md);
        }
      `}</style>
    </>
  )
}
