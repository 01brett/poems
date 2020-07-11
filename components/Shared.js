/** @jsxFrag React.Fragment */
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'

import Tweet from '../components/Tweet'
import Poem from '../components/Poem'
import Message from '../components/Message'

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
      {data.clicks && (
        <p
          css={css`
            color: var(--grey2);
            padding-top: var(--sm);
            margin-bottom: var(--lg);
          `}>
          This poem was constructed in {data.clicks}{' '}
          {data.clicks > 1 ? 'clicks' : 'click'}.
        </p>
      )}
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin: var(--xs) auto var(--lg);
          padding: 0 var(--xxs);
        `}>
        <Link href="/">
          <a>
            <span role="img" aria-label="new icon">
              🆕{' '}
            </span>
            Make a Poem
          </a>
        </Link>
      </div>
    </>
  )
}
