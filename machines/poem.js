import { createMachine, assign } from "xstate"

import data from "utils/tweets"
import clip from "utils/clip"

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

export const poemMachine = createMachine(
  {
    id: "poem",
    initial: "compose",
    context: {
      poem: [data[295]],
      clicks: 0,
      error: "",
      shareUrl: ""
    },
    states: {
      compose: {
        on: {
          ADD_LINE: {
            actions: ["addLine", "incrementClicks"]
          },
          REMOVE_LINE: {
            actions: ["removeLine", "incrementClicks"]
          },
          REPLACE_LINE: {
            actions: ["replaceLine", "incrementClicks"]
          },
          SHARE_POEM: "pending"
        }
      },
      pending: {
        invoke: {
          id: "sharePoem",
          src: sharePoem,
          onDone: {
            target: "shared",
            actions: assign({
              shareUrl: (_, event) => `${window.origin}/${event.data.id}`
            })
          },
          onError: {
            target: "compose",
            actions: assign({
              error: (_, event) => event.data
            })
          }
        }
      },
      shared: {
        id: "shared",
        initial: "notcopied",
        states: {
          notcopied: {
            on: {
              COPY_URL: {
                target: "copied",
                actions: ["copyUrl"]
              }
            }
          },
          copied: {
            after: {
              3000: "notcopied"
            }
          }
        }
      }
    }
  },
  {
    actions: {
      incrementClicks: assign((ctx) => ({ ...ctx, clicks: ctx.clicks + 1 })),
      addLine: assign((ctx) => {
        let rand = data[Math.floor(Math.random() * data.length - 1)]
        while (ctx.poem.includes(rand)) {
          rand = data[Math.floor(Math.random() * data.length - 1)]
        }
        return {
          poem: [...ctx.poem, rand]
        }
      }),
      removeLine: assign((ctx) => {
        const poemArr = [...ctx.poem]
        poemArr.pop()
        return {
          poem: [...poemArr]
        }
      }),
      replaceLine: assign((ctx) => {
        let rand = data[Math.floor(Math.random() * data.length - 1)]
        const poemArr = [...ctx.poem]
        while (poemArr.includes(rand)) {
          rand = data[Math.floor(Math.random() * data.length - 1)]
        }
        poemArr[poemArr.length - 1] = rand

        return {
          poem: [...poemArr]
        }
      }),
      resetPoem: assign(() => {
        return {
          poem: [data[Math.floor(Math.random() * data.length - 1)]],
          clicks: 0,
          error: "",
          shareUrl: ""
        }
      }),
      copyUrl: async (ctx) => {
        try {
          const input = document.querySelector("#share-url")
          await clip(input.value)
          setCopied(true)
          return setTimeout(() => {
            setCopied(false)
          }, 3000)
        } catch (err) {
          console.log("Copying url error – ", error)
          setError({ status: false, text: err })
          setCopied(false)
        }
      }
    }
  }
)
