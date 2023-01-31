import React from 'react'
import { Stack, Button } from 'react-bootstrap'

export default function Title() {
  return (
    <Stack style={{marginTop: '5em', marginBottom: '40%'}} className='mx-auto text-center '>
    <div className='m-4 bg-tertiary'>
      <h1 style={{fontSize: '4em'}}>Kristens Creations</h1>
      <h2 className='text-muted' style={{fontSize: '1.5em'}}>Event Decor and Floral</h2>
      <Button className='mt-3' variant='outline-secondary' >Lets get this party started</Button>
    </div>
</Stack>
  )
}
