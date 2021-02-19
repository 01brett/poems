import * as React from "react"
import { createUseMachine } from "robot-hooks"
import { createMachine, state, transition, invoke, reduce } from "robot3"

import data from "utils/tweets"
import clip from "utils/clip"

export const useMachine = createUseMachine(React.useEffect, React.useState)

const sharePoem = async (ctx) => {
  const { poem, clicks } = ctx

  return fetch("/api/save", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      poem,
      clicks
    })
  }).then((res) => res.json())
}

export const generatorMachine = createMachine(
  {
    initial: state(
      // transition(actionName, nextState)
      transition("share", "pending")
    ),
    pending: invoke(
      sharePoem,
      transition(
        "done",
        "finished",
        reduce((context, event) => {
          return {
            ...context,
            shareUrl: `${window.origin}/${event.data.id}`
          }
        })
      ),
      transition(
        "error",
        "initial",
        reduce((context, event) => {
          return {
            ...context,
            error: event.error
          }
        })
      )
    ),
    finished: state()
  },
  () => ({
    poem: [data[295]],
    clicks: 0,
    error: "",
    shareUrl: ""
  })
)
