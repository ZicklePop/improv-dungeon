import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import random from 'lodash/random'

const Dot = () => (
  <span
    role="img"
    className="animate-pulse inline-block bg-white rounded-full w-2 h-2 m-1 motion-reduce:animate-none"
  ></span>
)

const ChatBubble = ({ type, message }) => {
  const [typingIndicator, setTypingIndicator] = useState(type === 'received')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypingIndicator(false)
    }, random(800, 1200))
    
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={`cv-auto w-full ${type === 'received' ? '' : 'text-right'}`}>
      <p
        className={`inline-block p-2 my-2 leading-normal text-white rounded-xl break-all ${
          type === 'received'
            ? 'bg-gradient-to-bl from-pink-500 to-pink-800 rounded-bl-none'
            : 'bg-gradient-to-br from-blue-500 to-blue-800 rounded-br-none'
        }`}
      > {typingIndicator ? <><Dot /><Dot /><Dot /></> : message}
      </p>
    </div>
  )
}

ChatBubble.defaultProps = {
  type: 'sent',
  message: '',
}

ChatBubble.propTypes = {
  type: PropTypes.oneOf(['sent', 'received']),
  message: PropTypes.string,
}

export default ChatBubble
