/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default function Tweet(props) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--sm);
      `}>
      <section
        css={css`
          display: flex;
          align-items: center;
        `}>
        <img
          css={css`
            width: calc(var(--lg) * 3);
            height: auto;
            border: 0.1rem solid var(--grey);
            border-radius: calc(var(--sm) / 2);
          `}
          src="/horse.jpg"
          alt="realistic painting of an Arabian horse mid-gallop"
        />
        <div
          css={css`
            margin-left: var(--sm);
          `}>
          <h2
            css={css`
              font-size: var(--lg);
              margin-bottom: calc(var(--xs));
            `}>
            Horse ebooks
          </h2>
          <p
            css={css`
              color: var(--grey2);
            `}>
            @horse_ebooks
          </p>
        </div>
      </section>
      {props.children}
    </div>
  )
}
