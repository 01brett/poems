import * as React from 'react'
import clip from '../utils/clip'
import data from '../utils/tweets'

import Tweet from './Tweet'
import Poem from './Poem'
import Button from './Button'
import Message from './Message'

export default function Generator() {
  var [error, setError] = React.useState({
    status: false,
    text: ''
  })
  var [poem, setPoem] = React.useState([data[295]])
  var [count, setCount] = React.useState(1)
  var [clicks, setClicks] = React.useState(0)

  var [copied, setCopied] = React.useState(false)
  var [isSharing, setIsSharing] = React.useState(false)
  var [isShared, setIsShared] = React.useState(false)
  var [shareUrl, setShareUrl] = React.useState('')

  function add() {
    const rand = data[Math.floor(Math.random() * data.length)]
    if (!poem.includes(rand)) {
      setPoem([...poem, rand])
      setCount((prevCount) => prevCount + 1)
    } else {
      const altRand = data[Math.floor(Math.random() * data.length)]
      setPoem([...poem, altRand])
      setCount((prevCount) => prevCount + 1)
    }
    setClicks((prev) => prev + 1)
  }

  function remove() {
    const poemArr = [...poem]
    poemArr.pop()
    setPoem(poemArr)
    setCount((prevCount) => prevCount - 1)
    setClicks((prev) => prev + 1)
  }

  function replace() {
    const randTweet = data[Math.floor(Math.random() * data.length)]
    const poemArr = [...poem]
    poemArr[poemArr.length - 1] = randTweet
    setPoem(poemArr)
    setClicks((prev) => prev + 1)
  }

  async function copyUrl() {
    try {
      const input = document.querySelector('#share-url')
      await clip(input.value)
      setCopied(true)
      return setTimeout(() => {
        setCopied(false)
      }, 3000)
    } catch (err) {
      console.log('Copying url error – ', error)
      setError({ status: false, text: err })
      setCopied(false)
    }
  }

  function reset() {
    setPoem([data[Math.floor(Math.random() * data.length)]])
    setCount(1)
    setClicks(0)
    setError({ status: false, text: '' })
    setIsShared(false)
    setShareUrl('')
  }

  async function share() {
    const userData = {
      poem,
      clicks
    }
    setIsSharing(true)
    try {
      const res = await fetch('/api/save', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(userData)
      })
      var data = await res.json()
      setError({ status: false, text: '' })
      setIsSharing(false)
      setIsShared(true)
      setShareUrl(`${window.origin}/${data.uid}`)
    } catch (err) {
      console.log('Saving poem error — ', err)
      setError({ status: true, text: err })
    }
  }

  return (
    <>
      {error.status && <Message text={error.text} error />}
      {isShared && (
        <section>
          <Button
            customCSS={'margin-bottom: var(--md);'}
            handleClick={reset}
            alt="bomb"
            emoji="💣 "
            text="Make Another"
          />
          <label htmlFor="share-url">Your Poem's URL</label>
          <div className="saved-box">
            <input
              type="text"
              id="share-url"
              onChange={setShareUrl}
              value={shareUrl}
            />
            <Button
              customCSS={'margin-left: var(--sm);'}
              handleClick={copyUrl}
              text={copied ? 'Copied!' : 'Copy'}
              disabled={copied}
            />
          </div>
        </section>
      )}

      <Tweet>
        {!isShared && (
          <Button
            handleClick={share}
            disabled={count < 2 || isSharing}
            text={isSharing ? '∆·∇·∆' : 'Share'}
          />
        )}
      </Tweet>
      <Poem poem={poem} />
      {!isShared && (
        <div className="controls">
          <Button
            handleClick={replace}
            alt="shuffle"
            emoji="🔀 "
            text="Swap Line"
          />
          <div className="line-controls">
            <Button
              handleClick={remove}
              disabled={count <= 1}
              alt="minus"
              emoji="➖"
              text="Line"
            />
            <Button
              customCSS={'margin-left: 1rem;'}
              handleClick={add}
              disabled={count >= 5}
              alt="plus"
              emoji="➕"
              text="Line"
            />
          </div>
        </div>
      )}
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

        input[type='text'] {
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
