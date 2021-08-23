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
        className="flex-1 appearance-none p-2 w-auto rounded-none dark:text-white dark:bg-black  focus:ring-2 focus:ring-blue-500 focus:ring-inset outline-none sm:rounded-bl-xl"
      />
      <button
        type="submit"
        className="flex-none appearance-none bg-green-500 px-3 py-2 text-white transition-colors focus:ring-2 focus:ring-green-300 focus:ring-inset outline-none rounded-none sm:rounded-br-xl bg-green-600 hover:bg-green-500 active:bg-green-700"
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
