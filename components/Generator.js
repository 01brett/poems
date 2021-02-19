import * as React from "react"
// import { useMachine } from "@xstate/react"

import { poemMachine } from "machines/poem"
import { useMachine, generatorMachine } from "machines/generator"

import Tweet from "components/Tweet"
import Poem from "components/Poem"
import Button from "components/Button"
import Message from "components/Message"

export default function Generator() {
  const [state, send] = useMachine(generatorMachine)
  const { poem, error, shareUrl } = state.context
  console.log("context:", state.context)

  return (
    <>
      <h1 style={{ marginBottom: "1rem" }}>{JSON.stringify(state.name, null, 2)}</h1>
      {state.error ? <Message text={error} error /> : null}
      {state.shared ? (
        <section>
          <Button
            customCSS={"margin-bottom: var(--md);"}
            send={send}
            action="RESET_POEM"
            alt="bomb"
            emoji="💣 "
            text="Make Another"
          />
          <label htmlFor="share-url">Your Poem's URL</label>
          <div className="saved-box">
            <input readOnly type="text" id="share-url" value={shareUrl} />
            <Button
              customCSS={"margin-left: var(--sm);"}
              send={send}
              action="COPY_URL"
              text={state.copied ? "Copied!" : "Copy"}
              disabled={state.copied}
            />
          </div>
        </section>
      ) : null}

      <Tweet>
        {!state.shared ? (
          <Button
            send={send}
            action="SHARE_POEM"
            disabled={poem < 2 || state.pending}
            text={state.pending ? "∆·∇·∆" : "Share"}
          />
        ) : null}
      </Tweet>
      <Poem poem={poem} />
      {!state.shared ? (
        <div className="controls">
          <Button
            send={send}
            action="REPLACE_LINE"
            alt="shuffle"
            emoji="🔀 "
            text="Swap Line"
            disabled={state.pending}
          />
          <div className="line-controls">
            <Button
              send={send}
              action="REMOVE_LINE"
              disabled={poem.length <= 1 || state.pending}
              alt="minus"
              emoji="➖"
              text="Line"
            />
            <Button
              customCSS={"margin-left: 1rem;"}
              send={send}
              action="ADD_LINE"
              disabled={poem.length >= 5 || state.pending}
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
