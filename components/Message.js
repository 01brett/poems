export default function Message(props) {
  return (
    <section>
      <p>{props.text}</p>
      {props.children}
      <style jsx>{`
        section {
          padding: var(--lg) var(--sm);
          margin-bottom: var(--md);
          border-radius: var(--xs);
          text-align: center;
        }
      `}</style>
      <style jsx>{`
        section {
          ${props.error && 'background-color: rgba(178, 34, 34, 0.1)'};
        }

        p {
          ${props.error && 'color: rgba(178, 34, 34, 1);'}
          ${props.children && 'margin-bottom: var(--md);'}
        }
      `}</style>
    </section>
  )
}
