import React from 'react'
import { Container, Stack, Image } from 'react-bootstrap'
import family from '../../assets/HatchFamily.jpg'

export default function About() {
  return (
    <Container className='mt-5'>
        <h2 className='text-center'>About Me</h2>
        <Stack className='bg-dark p-4' gap={5} direction='horizontal'>
        <div>
          <Stack>
          <h3 className='text-light' style={{width: '110%'}}>I'm a bad boy. Always have been. But you knew that.</h3>
          <p className='text-light'>I had been searching for my family for months, ever since I had heard about the old oil fields near my hometown. I was desperate to find them, so I set out to investigate. After days of searching, I stumbled upon one of the oil fields. As I approached, I noticed my family's faces among the workers. I was overwhelmed with emotion and quickly negotiated a reasonable price to buy them out of their labor. With a heavy heart, I paid the price and my family was finally free. We all hugged and thanked each other, and to this day I'm grateful to have found them in the oil fields.</p>
          </Stack>
        </div>
        <div>
            <Image src={family} />
        </div>
        </Stack>
    </Container>
  )
}
