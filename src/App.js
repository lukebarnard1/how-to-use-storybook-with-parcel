import React, { useState } from 'react'
import { Button } from './stories/Button'

export function App() {
  const [count, setCount] = useState(0)
  return (
    <Button
      onClick={() => setCount(count + 1)}
      label={`This button has been clicked ${count} times`}
      primary
    />
  )
}
