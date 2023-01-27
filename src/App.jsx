import { useState } from 'react'
import reactLogo from '../public/react.svg'
import title from '../assets/logos/1.png'
import Title from './components/Title'
import { Stack } from 'react-bootstrap'
import Nav from './components/NavBar'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Stack>
    <Title />
    <About />
    </Stack>
    </>
  )
}

export default App
