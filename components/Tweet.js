export default function Tweet(props) {
  return (
    <div className="tweet">
      <section>
        <img
          src="/horse.jpg"
          alt="realistic painting of an Arabian horse mid-gallop"
        />
        <div>
          <h2>Horse ebooks</h2>
          <p>@horse_ebooks</p>
        </div>
      </section>
      {props.children}
      <style jsx>{`
        .tweet {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--sm);
        }

        section {
          display: flex;
          align-items: center;
        }

        img {
          width: calc(var(--lg) * 3);
          height: auto;
          border: 0.1rem solid var(--grey);
          border-radius: calc(var(--sm) / 2);
        }

        .tweet div {
          margin-left: var(--sm);
        }

        h2 {
          font-size: var(--lg);
          margin-bottom: calc(var(--sm) / 2);
        }

        p {
          color: var(--grey2);
        }
      `}</style>
    </div>
  )
}
