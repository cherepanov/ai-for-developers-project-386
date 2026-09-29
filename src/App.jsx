import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Календарь звонков</h1>
      <p>Vite + React готов к работе.</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Счётчик: {count}
      </button>
    </main>
  )
}
