import { useEffect, useRef } from 'react'

const ChatContainer = ({ children }) => {
  const chatContainerRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      const { current } = chatContainerRef
      if (current) {
        const currentOffset = current.getBoundingClientRect().top
        const currentFormSize = document.querySelector('form').offsetHeight
        const largeScreenPadding = window.matchMedia('(min-width: 640px)').matches ? 100 : 0
        current.style.height = `${window.innerHeight - currentOffset - currentFormSize - largeScreenPadding}px`
      }
    }
    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

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
