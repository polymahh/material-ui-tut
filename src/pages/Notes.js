import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Checkbox, Container, Divider, FormControlLabel, InputAdornment, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

export default function Notes() {

  const [lang, setLang] = React.useState('10');

  const handleChange = (event) => {
    setLang(event.target.value);
  };
  return (
    <div >
      <Container  >
      <Select
      sx={{
        mt:4,
        float:'right',
        color:"#C1C7D0"
      }}
          
          value={lang}
          onChange={handleChange}
        >
          <MenuItem value={10} selected>English (UK)</MenuItem>
          <MenuItem value={20}>French (FR)</MenuItem>
          <MenuItem value={30}>Spanish (SP)</MenuItem>
      </Select>
      <Stack 
        sx={{width:'500px', m:'auto',height:"100vh",justifyContent: "center"}}
        spacing={4}
        direction="column" >
        <Box textAlign={'center'}>
          <Typography fontWeight={700} variant="h4" sx={{mb:"12px"}}>Sign In</Typography>
          <Typography fontWeight={600} color="#AAB2BF" variant="body1">Welcome back, you've been missed!</Typography>
        </Box>
        <Stack direction='row' spacing={2} fullWidth>
          <Button size='large' startIcon={<FcGoogle/>} fullWidth sx={{color:"#C1C7D0",backgroundColor:"#FAFBFC"}}>Sign In with Google</Button> 
          <Button size='large' startIcon={<BsApple/>} fullWidth sx={{color:"#C1C7D0",backgroundColor:"#FAFBFC"}}>Sign In with Apple ID</Button> 
        </Stack>
        <Divider>
          <Typography sx={{color:"#C7CBD1"}}>
            OR
          </Typography>
        </Divider>
        <Stack m={'auto'} spacing={3} noValidate autoComplete='off'>
          <TextField 
          type="email"
          fullWidth
          placeholder='Your Email'
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon color='disabled' />
              </InputAdornment>
            ),
          }}
          
          />
          <TextField 
          type="password"
          fullWidth
          placeholder='Password'
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HttpsIcon color='disabled' />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon color='disabled' />
              </InputAdornment>
            ),
          }}
         
          />
        </Stack>
        <Stack direction="row" sx={{justifyContent:"space-between"}}>

        <FormControlLabel control={<Checkbox size='medium' sx={{
            color: '#C7CBD1',
            '&.Mui-checked': {
              color: '#3F82FD',
            },
          }} />} 
          sx={{color:"#C7CBD1"}}
          label="Remember Me" />

        <Button sx={{color:"#C1C7D0"}}>Forgot Password?</Button>
        </Stack>
        <Button 
          sx={{p:2}}
          fullWidth
          variant="contained"
          >Sign Up</Button>

        <Typography textAlign="center" fontWeight={600} color="#AAB2BF" variant="body2">Dont't have an account yet? <a style={{color:"#3F82FD"}} href="/">Sign Up</a></Typography>

      </Stack>
    </Container>
    </div>
  )
}
