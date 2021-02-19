export default function Button(props) {
  return (
    <button onClick={() => props.send(props.action)} disabled={props.disabled}>
      {props.emoji && (
        <span role="img" aria-label={props.alt}>
          {props.emoji}
        </span>
      )}
      {props.text}
      <style jsx>{`
        button {
          ${props.customCSS && props.customCSS}
        }
      `}</style>
    </button>
  )
}
