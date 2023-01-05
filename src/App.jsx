import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import title from '../assets/logos/1.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className="App">
      <img src={title} alt='Main logo for Kristens creations;' />
    </div>
  )
}

export default App
