export default function Poem({ poem }) {
  return (
    <div>
      {poem ? poem.map(({ tweet_id, text }, idx) => <p key={`${tweet_id}${idx}`}>{text}</p>) : null}
      <style jsx>{`
        div {
          margin-bottom: var(--md);
        }

        p {
          font-family: var(--serif);
          font-size: var(--lg);
          line-height: 1.3;
          margin-bottom: var(--sm);
        }
      `}</style>
    </div>
  )
}
