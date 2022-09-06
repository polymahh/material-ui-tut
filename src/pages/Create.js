import { Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';


export default function Create() {
  
    const btnStyle = {
      fontSize:  60,
      backgroundColor: 'red',
      color:'white',  
     '&:hover' : {
      color:'blue'
     }
  
    }
  
  return (
    <div>
      <Container>
    <Typography
      variant="h6"
      color="GrayText"
      component="h2"

      gutterBottom
    >
      Create a New Note
    </Typography>

    <Button 
      sx={btnStyle}
      fullWidth 
      type='submit' 
      variant='outlined' 
    >Click</Button>
    

    <Button 
      onClick={(e)=> console.log(e.target)}
      variant='contained'
      color="secondary"
      disableElevation
      fullWidth
      startIcon={<AcUnitOutlinedIcon/>}
    >
      Submit
    </Button>

    <AcUnitOutlinedIcon />
    <AcUnitOutlinedIcon />
    </Container>
    </div>
  )
}
