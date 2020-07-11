import React from 'react'
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default function Poem({ poem }) {
  return (
    <React.Fragment>
      {poem &&
        poem.map(el => {
          return (
            <p
              css={css`
                font-family: var(--serif);
                font-size: var(--lg);
                line-height: 1.33;
                margin-bottom: var(--sm);
              `}
              key={el.tweet_id}>
              {el.text}
            </p>
          )
        })}
    </React.Fragment>
  )
}
