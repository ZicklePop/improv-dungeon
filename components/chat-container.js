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
        const borderWidth = 1
        current.style.height = `${window.innerHeight - currentOffset - currentFormSize - largeScreenPadding - borderWidth}px`
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
    const timeout = setTimeout(() => {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }, 1)

    return () => clearTimeout(timeout)
  },[chatContainerRef, children])

  return (
    <div
      ref={chatContainerRef}
      className="flex-1 w-full px-2 overflow-auto sm:rounded-t-xl h-96 shadow-inner min-h-full border-b border-gray-200 dark:border-gray-800"
      style={{ minHeight: '158px' }}
    >
      <div className="flex flex-wrap h-full content-end">
        {children}
      </div>
    </div>
  )
}

export default ChatContainer
