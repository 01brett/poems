export default function Toast(props) {
  return (
    <div>
      <p>{props.text}</p>
      {props.dismiss && <button onClick={props.handleDismiss}>Close</button>}
      <style jsx>{`
        div {
          position: absolute;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: calc(var(--max) - var(--lg));
          margin: 0 auto;
          font-size: 1.5rem;
          line-height: 1.33;
          padding: var(--sm);
          color: white;
          background-color: darkgreen;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2),
            0 2px 4px -1px rgba(0, 0, 0, 0.12);
          border-radius: var(--xs);
          z-index: 2;
          transition: all 0.3s;
        }

        p {
          padding-left: var(--xs);
          padding-right: var(--sm);
        }

        button {
          all: unset;
          outline: none;
          color: white;
          background-color: rgba(0, 0, 0, 0.125);
          font-weight: 700;
          padding: var(--sm);
          border-radius: var(--xs);
          touch-action: manipulation;
        }

        button:hover {
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.35);
        }

        button:focus {
          box-shadow: 0 0 0 var(--xs) var(--black);
        }

        button:active {
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
      <style jsx>{``}</style>
    </div>
  )
}
