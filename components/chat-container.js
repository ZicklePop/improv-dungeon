import { useEffect, useRef } from 'react'

const ChatContainer = ({ children }) => {
  const chatContainerRef = useRef(null)
  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
  },[chatContainerRef, children])

  return (
    <div
      ref={chatContainerRef}
      className="flex-1 w-full px-2 overflow-auto sm:rounded-t-xl h-96 shadow-inner"
    >
      {children}
    </div>
  )
}

export default ChatContainer
