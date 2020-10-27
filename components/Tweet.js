import ImgWithFallback from './ImgWithFallback'

export default function Tweet(props) {
  return (
    <div className="tweet">
      <section>
        <div className="tweet-img">
          <ImgWithFallback
            src="/horse.webp"
            fallback="/horse.jpg"
            alt="realistic painting of an Arabian horse mid-gallop"
          />
        </div>
        <div className="tweet-text">
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
        .tweet-img {
          width: calc(var(--lg) * 3);
          height: auto;
          border: 1px solid var(--grey);
          border-radius: calc(var(--sm) / 2);
          overflow: hidden;
        }
        .tweet-text {
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
