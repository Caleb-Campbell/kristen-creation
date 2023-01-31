import React from 'react'
import { Nav, Stack, Button, Image, ButtonGroup } from 'react-bootstrap'

export default function NavBar() {

  // const handleClick = (e) => {
  //   setDarkMode(!darkMode)
  // }



  return (
    <Nav id='nav' className={`justify-content-between p-3 `}>
      <h2>Logo</h2>
    <Stack direction='horizontal'>
    <Nav.Item>
      <Nav.Link href="#about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#projects">Gallery</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/home">Contact</Nav.Link>
    </Nav.Item>
 
    </Stack>

    </Nav>
  )
}
