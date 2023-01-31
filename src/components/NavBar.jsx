import React from 'react'
import { Nav, Stack, Button, Image, ButtonGroup } from 'react-bootstrap'

import logo from '../../assets/logos/transparent.png'

export default function NavBar() {

  // const handleClick = (e) => {
  //   setDarkMode(!darkMode)
  // }



  return (
    <Nav  id='nav' className='justify-content-between p-3 m-3 position-sticky-top'>
      <Image src={logo} />
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
