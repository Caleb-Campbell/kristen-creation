import { useState } from 'react'
import reactLogo from '../public/react.svg'
import './App.css'
import title from '../assets/logos/1.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className="App">
      <div className='title-img-wrapper'>
      <img src={title} alt='Main logo for Kristens creations;' />
      </div>
    </div>
  )
}

export default App
