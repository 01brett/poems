import React from 'react'
/** @jsxFrag React.Fragment */
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default function Header(props) {
  return (
    <React.Fragment>
      <nav
        css={css`
          width: 100%;
          margin-bottom: var(--sm);
          background-color: var(--grey-bg);
          border-bottom: 0.1rem solid var(--grey);
        `}>
        <div
          css={css`
            margin: 0 auto;
            padding: var(--sm);
            max-width: var(--max);
          `}>
          <h1
            css={css`
              margin-bottom: 0.5rem;
            `}>
            <span role="img" aria-label="cartoon horse head">
              🐴{' '}
            </span>
            Poem Generator
          </h1>
          <h2
            css={css`
              font-weight: 400;
            `}>
            via Twitter's @horse_ebooks
          </h2>
        </div>
      </nav>
      <section
        css={css`
          margin: 0 auto;
          padding: 0 var(--sm) var(--sm);
          max-width: var(--max);
        `}>
        {props.children}
      </section>
    </React.Fragment>
  )
}
