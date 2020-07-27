/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default function Toast(props) {
  return (
    <div
      css={css`
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: calc(var(--max) - var(--lg));
        margin: 0 auto;
        font-size: 1.5rem;
        line-height: 1.33;
        padding: var(--sm);
        color: white;
        background-color: ${props.error ? 'firebrick' : 'green'};
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2),
          0 2px 4px -1px rgba(0, 0, 0, 0.12);
        border-radius: var(--xs);
        transition: all 0.3s;
      `}>
      <p
        css={css`
          padding-left: var(--xs);
          padding-right: var(--sm);
        `}>
        {props.text}
      </p>
      {props.dismiss && (
        <button
          onClick={props.handleDismiss}
          css={css`
            all: unset;
            outline: none;
            color: white;
            background-color: rgba(0, 0, 0, 0.125);
            font-weight: 700;
            padding: var(--sm);
            border-radius: var(--xs);
            touch-action: manipulation;

            &:hover {
              cursor: pointer;
              background-color: rgba(0, 0, 0, 0.35);
            }
            &:focus {
              box-shadow: 0 0 0 var(--xs) var(--black);
            }
            &:active {
              background-color: rgba(0, 0, 0, 0.5);
            }
          `}>
          Dismiss
        </button>
      )}
    </div>
  )
}
