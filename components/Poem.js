/** @jsxFrag React.Fragment */
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default function Poem({ poem }) {
  return (
    <>
      {poem.map((el, idx) => (
        <p
          css={css`
            font-family: var(--serif);
            font-size: calc(var(--lg) * 1.1);
            line-height: 1.3;
            margin-bottom: var(--sm);
          `}
          key={el.tweet_id + idx}>
          {el.text}
        </p>
      ))}
    </>
  )
}
