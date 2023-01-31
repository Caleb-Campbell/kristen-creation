import { useState } from 'react'
import { Stack } from 'react-bootstrap'
//  components
import Title from './components/Title'
import Nav from './components/NavBar'
import About from './components/About'
import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Stack>
    <Title />
    <About />
    <Gallery />
    </Stack>
    </>
  )
}

export default App
