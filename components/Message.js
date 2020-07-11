/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default function Message(props) {
  return (
    <section
      css={css`
        padding: var(--lg) var(--sm);
        margin-bottom: var(--md);
        ${props.error && 'background-color: rgba(178, 34, 34, 0.1)'};
        border-radius: var(--xs);
        text-align: center;
      `}>
      <p
        css={css`
          ${props.error && 'color: rgba(178, 34, 34, 1);'}
          ${props.children && 'margin-bottom: var(--md);'}
        `}>
        {props.text}
      </p>
      {props.children}
    </section>
  )
}
