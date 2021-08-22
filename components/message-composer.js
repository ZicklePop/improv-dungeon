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
    <form onSubmit={handleSubmit} className="flex w-full m-0 p-0 shadow">
      <input
        ref={inputRef}
        type="text" 
        placeholder="Write your dialog"
        className="flex-1 appearance-none border-t border-gray-200 p-2 w-auto rounded-none dark:text-white dark:bg-black dark:border-gray-800"
      />
      <button
        type="submit"
        className="flex-none appearance-none border-t border-green-500 bg-green-500 hover:bg-green-600 px-3 py-2 text-white transition-colors"
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
