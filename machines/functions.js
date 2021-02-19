import data from "utils/tweets"
import clip from "utils/clip"

export const addLine = (ctx) => {
  let rand = data[Math.floor(Math.random() * data.length - 1)]
  while (ctx.poem.includes(rand)) {
    rand = data[Math.floor(Math.random() * data.length - 1)]
  }
  return {
    ...ctx,
    clicks: ctx.clicks + 1,
    poem: [...ctx.poem, rand]
  }
}

export const removeLine = (ctx) => {
  const poemArr = [...ctx.poem]
  poemArr.pop()
  return {
    ...ctx,
    clicks: ctx.clicks + 1,
    poem: [...poemArr]
  }
}

export const replaceLine = (ctx) => {
  let rand = data[Math.floor(Math.random() * data.length - 1)]
  const poemArr = [...ctx.poem]
  while (poemArr.includes(rand)) {
    rand = data[Math.floor(Math.random() * data.length - 1)]
  }
  poemArr[poemArr.length - 1] = rand

  return {
    ...ctx,
    clicks: ctx.clicks + 1,
    poem: [...poemArr]
  }
}

export const resetPoem = () => {
  return {
    poem: [data[Math.floor(Math.random() * data.length - 1)]],
    clicks: 0,
    error: "",
    shareUrl: ""
  }
}

export const sharePoem = async (ctx) => {
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

export const saveUrl = (ctx, e) => {
  return {
    ...ctx,
    shareUrl: `${window.origin}/${e.data.id}`
  }
}

export const saveError = (ctx, e) => {
  return {
    ...ctx,
    error: e.error
  }
}

export const hold = () => {
  setTimeout(() => {
    console.log("Holding for 3 seconds")
  }, 3000)
}

export const copyUrl = async () => {
  const input = document.getElementById("share-url")
  return await clip(input.value)
}
