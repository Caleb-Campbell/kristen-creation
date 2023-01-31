import { useState } from 'react'
import { Stack, Container } from 'react-bootstrap'
//  components
import Title from './components/Title'
import Nav from './components/NavBar'
import About from './components/About'
import Gallery from './components/Gallery'
// import './app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Stack gap={5}>
    <Title />
    <About />
    <Gallery />
    </Stack>
    </>
  )
}

export default App
