/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default function Button(props) {
  return (
    <button
      css={css`
        ${props.customCSS && props.customCSS};
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
