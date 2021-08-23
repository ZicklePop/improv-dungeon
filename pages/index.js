import { useCallback, useEffect, useState } from 'react'
import Ad from '../components/ad'
import ChatBubble from '../components/chat-bubble'
import ChatContainer from '../components/chat-container'
import ChatWindow from '../components/chat-window'
import Layout from '../components/layout'
import MessageComposer from '../components/message-composer'
import ai from '../utils/ai'
import fetch from 'isomorphic-unfetch'
import has from 'lodash/has'
import last from 'lodash/last'

const Index = ({ ad }) => {
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
      <Ad {...ad} />
    </Layout>
  )
}

Index.getInitialProps = async function () {
  const res = await fetch('https://melkat.deals/api')
  const ad = await res.json()
  return {
    ad
  }
}

export default Index
