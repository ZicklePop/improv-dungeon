import PropTypes from 'prop-types'
import { useRef } from 'react'

const MessageComposer = ({ onSubmit }) => {
  const inputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputRef.current.value) {
      return null
    }
    onSubmit('sent', inputRef.current.value)
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <input
        ref={inputRef}
        type="text" 
        placeholder="Write your dialog"
        className="appearance-none border border-blue-700 p-2 my-2 rounded-l rounded-r-none w-60 md:w-80"
      />
      <button
        type="submit"
        className="appearance-none border border-blue-700 bg-blue-700 p-2 my-2 rounded-r rounded-l-none text-white"
      >
        Send
      </button>
    </form>
  )
}

MessageComposer.defaultProps = {
  onSubmit: () => {},
}

MessageComposer.propTypes = {
  onSubmit: PropTypes.func,
}

export default MessageComposer
