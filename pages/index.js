import { useCallback, useEffect, useState } from 'react'
import Layout from '../components/layout'
import ChatBubble from '../components/chat-bubble'
import MessageComposer from '../components/message-composer'
import last from 'lodash/last'
import has from 'lodash/has'
import ai from '../utils/ai'

const Index = () => {
  const [chatHistory, setChatHistory] = useState([])
  const addToChatHistory = useCallback(
    (type, message) => {
      setChatHistory([...chatHistory, { message, type }])
    },
    [chatHistory]
  )

  useEffect(() => {
    const lastMessage = last(chatHistory)
    if (has(lastMessage, 'type') && lastMessage.type === 'sent') {
      addToChatHistory("received", ai(lastMessage.message))
    }

    let timeout = window.setTimeout(() => {
      document.querySelector('form').scrollIntoView(true)
    }, 1)

    return () => {
      clearTimeout(timeout)
    }
  }, [chatHistory, addToChatHistory])

  return (
    <Layout>
      <h1 className="text-3xl font-bold leading-loose">Improv Dungeon</h1>
      <p className="mb-3">
        Write out your scenario and the AI will play along!
        <br />
        <em>
          made with 💖 by <a href="https://melaniekat.com">melanie kat</a>
        </em>
      </p>

      {chatHistory.map(({ message, type }, i) => (
        <ChatBubble key={i} type={type} message={message} />
      ))}

      <MessageComposer onSubmit={addToChatHistory} />
    </Layout>
  )
}

export default Index
