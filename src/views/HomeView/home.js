import React from 'react';
import Box from '@mui/material/Box';
import NavBar from '../../components/Navbar/NavBar'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Home = () => {
  
  const countDown = [
    {
      value: 7,
      title: 'Days'
    },
    {
      value: 24,
      title: 'Hours',
    },
    {
      value: 54,
      title: 'Minutes',
    },
    {
      value: 11,
      title: 'Seconds',
    },
  ]

  return (
    <Box sx={{background: 'linear-gradient(to right bottom, #1F0142, #0C0125)', color: 'white', width: '100%', margin: 'auto', height: '120vh', overflow: 'hidden'}}>
      <Box 
        sx={{position: 'absolute', backgroundColor: 'white', width: 100, height: 100, borderRadius: '100%', left: 200, top: {md: 100, xs: 50}, background: 'linear-gradient(to left bottom, #7A1D78, #1A073C)'}}
      />
      <Box 
        sx={{position: 'absolute', backgroundColor: 'white', width: 80, height: 80, borderRadius: '100%', right: 200, top: {md: 250, xs: 100}, background: 'linear-gradient(to right bottom, #203A6E, #19073B)'}}
      />
      <Box 
        sx={{position: 'absolute', zIndex: 0, backgroundColor: 'white', width: 130, height: 130, borderRadius: '100%', left: 350, bottom: -10, background: 'linear-gradient(to right bottom, #7A3E29, #271328)'}}
      />

      <NavBar />
      
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: {xl: '45%', lg: '45%', md: '45%', sm: '90%', xs: '90%'}, margin: 'auto'}}>
        <Box sx={{my: 3}}>
          <Typography variant={'h3'} sx={{textAlign: 'center', position: 'relative', fontWeight: '900', zIndex: 10, fontSize: {xl: '3rem', lg: '3rem', md: 'rem', sm: '2rem', xs:'2rem'} }}>SOMETHING AWESOME IS COMING SOON</Typography>
        </Box>
        <Box sx={{my: 3}}>
          <Typography variant={'h6'} sx={{textAlign: 'center', fontSize: {xl: '1.25rem', lg: '1.25rem', md: '1rem', sm: '1rem', xs:'1rem'}  }}>Your all-in-one affiliate marketing tracking software <b>track, automate</b> and <b>optimize</b> your compaigns.</Typography>
        </Box>
        <Box sx={{my: 3, display: 'flex', flexDirection: 'row'}}>
          {countDown.map((count, i) => (
            <Box key={i + 100 } sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 3, backgroundColor: 'white', borderRadius: 5, marginX: 1, width: 50}}>
            <Typography variant="body" sx={{ fontSize: 25, mb: 1, textAlign: 'center', color: '#140130', fontWeight: '800'}}>{count.value}</Typography>
            <Typography variant="p" sx={{ textAlign: 'center', color: '#140130'}}>{count.title}</Typography>
          </Box> 
          ))}
        </Box>
        <Box sx={{mb: 1, mt: -2, display: 'flex', flexDirection: 'row'}}>
        <TextField
        InputLabelProps={{
          style: { color: '#fff',}, 
       }}
            fullWidth
            variant='standard'
            id='firstName'
            label='First Name'
            name='firstName'
            type='text'
            sx={{mx: 3}}
        />
        <TextField
        InputLabelProps={{
          style: { color: '#fff',}, 
       }}
            fullWidth
            variant='standard'
            id='lastName'
            label='Last Name'
            name='lastName'
            type='text'
            sx={{mx: 3}}
        />
        </Box>
        <Box sx={{mt: 2.5, mb: {md:10, xs:5 }, display: 'flex', flexDirection: {xl: 'row', lg: 'row', md: 'row', sm: 'column', xs: 'column'}, width: '90%', justifyContent: 'center'}}>
        <TextField
        InputLabelProps={{
          style: { color: 'black',}, 
       }}
            fullWidth
            variant='outlined'
            id='email'
            placeholder='enter your email address...'
            name='email'
            type='email'
            sx={{ backgroundColor: 'white', borderRadius: 10, input: { color: 'black', }, position: 'relative', left: {xl: 30, lg: 30, md: 30, sm: 'none', xs: 'none'},}}
        />
        <Button variant='contained' fullWidth sx={{borderRadius: 10, backgroundColor: '#271AC1', fontSize: 12, width: {xl: 250, lg: 250, md: 250, sm: 'none', xs: 'none'}, mt: { xs: 1, md: 0}, zIndex: 10, position: 'relative', right: {xl: 30, lg: 30, md: 30, sm: 'none', xs: 'none'}, fontWeight: 800 }}>
          JOIN OUR WAITING LIST
        </Button>
        </Box>
      </Box>
      <Box sx={{ position: 'relative', width: {xl: '80%', lg: '80%', md: '100%', sm: '100%', xs: '100%'}, marginX: 'auto', display: 'flex', height: 800, overflow: 'hidden', borderRadius: '80%', backgroundColor: 'rgba(142, 141, 115, 0.1)', border: '0.5px solid lightgrey', flexDirection: 'column', zIndex: 100 }}>
        <Box sx={{ width: '100%',    display: 'flex', justifyContent: 'center', my: 1, zIndex: 100 }}>
          <YouTubeIcon sx={{ color: 'white', mx: {md: 2, xs:1} , mt: 10, fontSize: 30 }}/>
          <FacebookIcon sx={{  color: 'gray', mx: {md: 2, xs:1} , mt: 10, fontSize: 30 }}/>
          <LinkedInIcon sx={{  color: 'gray', mx: {md: 2, xs:1} , mt: 10, fontSize: 30 }}/>
          <InstagramIcon sx={{  color: 'gray', mx: {md: 2, xs:1} , mt: 10, fontSize: 30 }}/>
          <TwitterIcon sx={{  color: 'gray', mx: {md: 2, xs:1} , mt: 10, fontSize:30 }}/>
        </Box>
        <Box sx={{ width: '100%',    display: 'flex', justifyContent: 'center', my:1, zIndex: 10 }}>
          <Typography sx={{mx: 3, fontWeight: 600, color: 'gray'}}>Terms of services</Typography>
          <Typography sx={{mx: 3, fontWeight: 600, color: 'gray'}}>Privacy policy</Typography>
        </Box>
        <Box sx={{ width: '100%',    display: 'flex', justifyContent: 'center', my:1, zIndex: 10 }}>
          <Typography sx={{mx: 3, fontWeight: 600, color: 'gray'}}>Copyright 2022 @ peddle Technologies. All Rights Reserved.</Typography>
        </Box>
        </Box>
    </Box>
    

  )
}

export default Home 