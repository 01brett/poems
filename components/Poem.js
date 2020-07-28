export default function Poem({ poem }) {
  return (
    <div>
      {poem.map((el, idx) => (
        <p key={el.tweet_id + idx}>{el.text}</p>
      ))}
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
