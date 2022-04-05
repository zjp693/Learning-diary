import React, { useCallback, useState } from 'react'

function App() {
  const [isTextChanged, setIsTextChange] = useToggle()

  return (
    <>
      <button onClick={setIsTextChange}> {isTextChanged ? "Toggled" : "click to Toggle"}</button>
    </>
  )
}

function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue)
  const toggle = useCallback(() => {
    setState((state) => !state)
  }, [])
  return [state, toggle]
}
export default App