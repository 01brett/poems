import * as React from "react"
import { useMachine, generatorMachine } from "machines/generator"

import Tweet from "components/Tweet"
import Poem from "components/Poem"
import Button from "components/Button"
import Message from "components/Message"

export default function Generator() {
  const [current, send] = useMachine(generatorMachine)
  const { poem, error, shareUrl } = current.context

  return (
    <>
      {error ? <Message text={JSON.stringify(error, null, 2)} error /> : null}
      {current.name === "shared" ? (
        <section>
          <Button
            customCSS={"margin-bottom: var(--md);"}
            send={send}
            action="reset"
            alt="bomb"
            emoji="💣 "
            text="Make Another"
          />
          <label htmlFor="share-url">Your Poem's URL</label>
          <div className="saved-box">
            <input readOnly type="text" id="share-url" value={shareUrl} />
            <Button customCSS={"margin-left: var(--sm);"} send={send} action="copy" text="Copy" />
          </div>
        </section>
      ) : null}

      <Tweet>
        {current.name === "initial" || current.name === "pending" ? (
          <Button
            send={send}
            action="share"
            disabled={poem?.length < 2 || current.name === "pending"}
            text={current.name === "pending" ? "∆·∇·∆" : "Share"}
          />
        ) : null}
      </Tweet>
      <Poem poem={poem} />
      {current.name === "initial" || current.name === "pending" ? (
        <div className="controls">
          <Button
            send={send}
            action="replace"
            alt="shuffle"
            emoji="🔀 "
            text="Swap Line"
            disabled={current.name === "pending"}
          />
          <div className="line-controls">
            <Button
              send={send}
              action="remove"
              disabled={poem?.length <= 1 || current.name === "pending"}
              alt="minus"
              emoji="➖"
              text="Line"
            />
            <Button
              customCSS={"margin-left: 1rem;"}
              send={send}
              action="add"
              disabled={poem?.length >= 5 || current.name === "pending"}
              alt="plus"
              emoji="➕"
              text="Line"
            />
          </div>
        </div>
      ) : null}
      <style jsx>{`
        .controls {
          position: sticky;
          width: 100%;
          bottom: 4rem;
          z-index: 2;

          display: flex;
          justify-content: space-between;
          margin-bottom: var(--sm);
          transition: all 0.3s;
        }

        section {
          position: relative;
          margin-bottom: var(--md);
        }

        label {
          display: block;
          font-size: 1.25rem;
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .saved-box {
          display: flex;
          margin-bottom: var(--sm);
        }

        input[type="text"] {
          width: 100%;
          height: 4rem;
          padding: 0 var(--sm);
          font-size: var(--md);
          outline: none;
          border: none;
          background-color: var(--grey-bg);
          border-radius: var(--xs);
        }
      `}</style>
    </>
  )
}
