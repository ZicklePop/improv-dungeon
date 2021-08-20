import PropTypes from 'prop-types'

const ChatBubble = ({ type, message }) => (
  <div className={`cv-auto ${type === 'recieved' ? '' : 'text-right'}`}>
    <p className={`inline-block p-2 my-2 leading-normal text-white rounded-lg break-all ${type === 'recieved' ? 'bg-pink-700 rounded-bl-none' : 'bg-blue-700 rounded-br-none'}`}>
      {message}
    </p>
  </div>
)

ChatBubble.defaultProps = {
  type: 'sent',
  message: '',
}

ChatBubble.propTypes = {
  type: PropTypes.oneOf(['sent', 'recieved']),
  message: PropTypes.string,
}

export default ChatBubble
