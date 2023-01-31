import React from 'react'
import { Nav, Stack, Button, Image, ButtonGroup } from 'react-bootstrap'

import logo from '../../assets/logos/logo.jpg'

export default function NavBar() {


  return (
    <Nav style={{}}  id='nav' className='justify-content-between m-3 position-sticky-top bg-dark'>
      <Image style={{width: '15%'}} src={logo} />
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
