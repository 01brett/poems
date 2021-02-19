import * as React from "react"
import { createMachine, state, transition, invoke, action, reduce } from "robot3"
import { createUseMachine } from "robot-hooks"

import data from "utils/tweets"
import {
  addLine,
  removeLine,
  replaceLine,
  sharePoem,
  saveUrl,
  saveError,
  resetPoem,
  copyUrl,
  hold
} from "machines/functions"

export const useMachine = createUseMachine(React.useEffect, React.useState)

export const generatorMachine = createMachine(
  {
    initial: state(
      // transition(actionName, nextState)
      transition("add", "initial", reduce(addLine)),
      transition("remove", "initial", reduce(removeLine)),
      transition("replace", "initial", reduce(replaceLine)),
      transition("share", "pending")
    ),
    pending: invoke(
      sharePoem,
      transition("done", "shared", reduce(saveUrl)),
      transition("error", "initial", reduce(saveError))
    ),
    shared: state(
      transition("copy", "shared", action(copyUrl)),
      transition("reset", "initial", reduce(resetPoem))
    )
  },
  () => ({
    poem: [data[295]],
    clicks: 0,
    error: "",
    shareUrl: ""
  })
)
