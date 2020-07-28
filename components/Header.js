export default function Header(props) {
  return (
    <>
      <nav>
        <div>
          <h1>
            <span role="img" aria-label="cartoon horse head">
              🐴{' '}
            </span>
            Poem Generator
          </h1>
          <h2>via Twitter's @horse_ebooks</h2>
        </div>
      </nav>
      <section>{props.children}</section>
      <style jsx>{`
        nav {
          width: 100%;
          margin-bottom: var(--sm);
          background-color: var(--grey-bg);
          border-bottom: 0.1rem solid var(--grey);
        }

        div {
          margin: 0 auto;
          padding: var(--sm);
          max-width: var(--max);
        }

        h1 {
          font-size: var(--lg);
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        h2 {
          font-size: var(--md);
          font-weight: 400;
        }

        section {
          margin: 0 auto;
          padding: 0 var(--sm) var(--sm);
          max-width: var(--max);
        }
      `}</style>
      <style jsx global>{`
        :root {
          --max: 400px;
          --xs: 0.25rem;
          --sm: 1rem;
          --md: 1.6rem;
          --lg: 2rem;
          --black: #121212;
          --grey: #ccc;
          --grey2: #99a4b3;
          --grey-bg: #efefef;
          --serif: Georgia, serif;
          --sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Open Sans', 'Helvetica Neue', sans-serif;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          max-width: 100%;
          touch-action: manipulation;
        }

        html {
          font-size: 62.5%;
          background-color: #fcfcfc;
          touch-action: manipulation;
        }

        body {
          font-family: var(--sans);
          color: var(--black);
        }

        /* Type */
        p {
          font-size: var(--md);
        }

        a {
          display: inline-block;
          line-height: 2.4;
        }

        a,
        button {
          font-family: var(--sans);
          font-size: var(--md);
          height: calc(var(--lg) * 2);
          padding: 0 calc(var(--md) / 1.25);
          color: var(--black);
          text-align: center;
          background-color: #fafbfc;
          border: 1px solid rgba(27, 31, 35, 0.15);
          border-radius: calc(var(--sm) / 1.35);
          box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
            inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
          transition: all 0.3s;
          user-select: none;
          appearance: none;
          touch-action: manipulation;
          text-decoration: none;
        }

        a:hover,
        button:hover {
          cursor: pointer;
          background-color: #f1f2f3;
          transition-duration: 0.1s;
        }

        a:focus,
        button:focus,
        a:active,
        button:active {
          outline: none;
        }

        a:focus,
        button:focus {
          box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
        }

        a:active,
        button:active {
          background-color: #edeff2;
          box-shadow: inset 0 1px 0 rgba(225, 228, 232, 0.2);
          transition: none;
        }

        a:disabled,
        button:disabled {
          color: var(--grey);
          background-color: var(--grey-bg);
          border-color: var(--grey-bg);
          box-shadow: none;
        }

        a:disabled span,
        button:disabled span {
          opacity: 0.1;
        }

        a:disabled:hover,
        a:disabled:active,
        a:disabled:focus,
        button:disabled:hover,
        button:disabled:active,
        button:disabled:focus {
          cursor: not-allowed;
        }
      `}</style>
    </>
  )
}
