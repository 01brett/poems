/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default function Button(props) {
  return (
    <button
      css={css`
        font-family: var(--sans);
        font-size: var(--md);
        height: calc(var(--lg) * 2);
        padding: 0 var(--sm);
        ${props.customCSS && props.customCSS};
        text-align: center;
        background-color: #fff;
        border: solid 2px rgba(0, 0, 0, 0);
        border-radius: calc(var(--sm) / 2);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2),
          0 2px 4px -1px rgba(0, 0, 0, 0.12);
        transition: all 0.3s;
        touch-action: manipulation;

        &:hover {
          cursor: pointer;
        }

        &:focus,
        &:active {
          outline: none;
        }

        &:focus {
          border: solid 2px rgba(0, 0, 0, 1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2),
            0 2px 4px -1px rgba(0, 0, 0, 0.12);
        }

        &:active {
          background-color: rgba(255, 221, 0, 1);
        }

        &:disabled {
          color: var(--grey);
          box-shadow: none;
          background-color: var(--grey-bg);

          & span {
            opacity: 0.125;
          }
        }

        &:disabled:hover,
        &:disabled:active {
          cursor: not-allowed;
          box-shadow: none;
          background-color: var(--grey-bg);
        }
      `}
      onClick={props.handleClick}
      disabled={props.disabled}>
      {props.emoji && (
        <span role="img" aria-label={props.alt}>
          {props.emoji}
        </span>
      )}
      {props.text}
    </button>
  )
}
