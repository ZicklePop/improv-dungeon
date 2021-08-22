import { useCallback, useEffect, useState } from 'react'
import Layout from '../components/layout'
import ChatBubble from '../components/chat-bubble'
import ChatContainer from '../components/chat-container'
import ChatWindow from '../components/chat-window'
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
  }, [chatHistory, addToChatHistory])

  return (
    <Layout>
      <h1 className="mx-2 text-3xl font-bold leading-loose">Improv Dungeon</h1>
      <p className="mx-2 mb-3">
        Write out your scenario and the AI will play along!
        <br />
        <em>
          made with 💖 by <a href="https://melaniekat.com">melanie kat</a>
        </em>
      </p>

      <ChatWindow>
        <ChatContainer>
        {chatHistory.map(({ message, type }, i) => (
          <ChatBubble key={i} type={type} message={message} />
        ))}
        </ChatContainer>
        <MessageComposer onSubmit={addToChatHistory} />
      </ChatWindow>

    </Layout>
  )
}

export default Index
