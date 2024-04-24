import React from 'react'
import { AppBar, Container, Toolbar, Typography, Box, Button, Stack } from '@mui/material';
import DropdownDiv from './DropdownDiv';
import { AREAS_OF_APPLICATION, EVENTS, FEATURES, THIS_IS_US } from '../constants';

function Navbar() {

  return (
    <AppBar position="sticky" >
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense" >
          <Box sx={{ paddingRight: 10 }} >
            <img src='https://ontego.de/images/commsult/logos/Ontego_Business_Mobi.svg' style={{ width: '165px', height: 'auto' }} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            <div className="dropdown-menu" >
              <ul>
                <li>
                  <a href="#" style={{ color: 'white', fontSize: 14 }}>Products</a>
                  <ul class="dropdown" style={{ width: '80vw', marginLeft: 0}}>
                    <Box style={{ backgroundColor: 'white', marginTop: 24}} >
                      <Stack spacing={2} direction="row" boxShadow={'0 3px 2px -2px gray'} paddingY={4}>
                        <Box paddingX={10} paddingTop={2}>
                        <img src="https://ontego.de/images/commsult/logos/Ontego_subline.svg"></img>
                        </Box>
                        <Stack spacing={8} direction="row" paddingLeft={4}>
                          <Stack style={{ color: 'black' }} direction={'column'} textAlign={'start'} spacing={1}>
                            <Typography className='submenuHead' color={'black'} fontWeight={'bold'} fontSize={20}>
                              Features
                            </Typography>
                            {FEATURES.map((text) => (
                              <Typography className='submenuItem' color={'#383D47'} fontWeight={300} fontSize={13}>{text}</Typography>
                            ))}
                          </Stack>
                          <Stack style={{ color: 'black' }} direction={'column'} textAlign={'start'} spacing={1}>
                            <Typography className='submenuHead' color={'black'} fontWeight={'bold'} fontSize={20}>
                              Areas Of Application
                            </Typography>
                            {AREAS_OF_APPLICATION.map((text) => (
                              <Typography className='submenuItem' color={'#383D47'} fontWeight={300} fontSize={13}>{text}</Typography>
                            ))}
                          </Stack>
                          <Stack style={{ color: 'black' }} direction={'column'} textAlign={'start'} spacing={1}>
                            <Typography className='submenuHead' color={'black'} fontWeight={'bold'} fontSize={20}>
                              Mobile Devices
                            </Typography>
                            <Typography color={'#383D47'} fontWeight={300} fontSize={13}>Find mobile hardware for my employees.</Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Box>
                  </ul>
                </li>
                <li>
                  <a href="#" style={{ color: 'white', fontSize: 14 }}>Why Ontego?</a>
                  <ul class="dropdown" style={{ width: '80vw', marginLeft: 0, padding: 0, left: -24 }}>
                    <Box style={{ backgroundColor: 'white', marginTop: 24, paddingBottom: 20 }}>
                      <Stack spacing={2} direction="row" boxShadow={'0 3px 2px -2px gray'} paddingY={4}>
                        <Stack  spacing={8} direction="row" paddingLeft={'16%'} >
                          <Stack style={{ color: 'black' }} direction={'column'} textAlign={'start'} spacing={1}>
                            <Typography className='submenuHead' color={'black'} fontWeight={'bold'} fontSize={20}>
                              Good Reasons
                            </Typography>
                            <Typography color={'#383D47'} fontWeight={300} fontSize={13}>Find mobile hardware for my employees.</Typography>
                          </Stack>
                          <Stack style={{ color: 'black' }} direction={'column'} textAlign={'start'} spacing={1}>
                            <Typography className='submenuHead' color={'black'} fontWeight={'bold'} fontSize={20}>
                              In Use
                            </Typography>
                            <Typography className='submenuItem' color={'#383D47'} fontWeight={300} fontSize={13}>{'Credentials'}</Typography>
                          </Stack>
                          <Stack style={{ color: 'black' }} direction={'column'} textAlign={'start'} spacing={1}>
                            <Typography className='submenuHead' color={'black'} fontWeight={'bold'} fontSize={20}>
                              This is Us
                            </Typography>
                            {THIS_IS_US.map((text) => (
                              <Typography className='submenuItem' color={'#383D47'} fontWeight={300} fontSize={13}>{text}</Typography>
                            ))}
                          </Stack>
                        </Stack>
                      </Stack>
                    </Box>
                  </ul>
                </li>
                <li>
                  <a href="#" style={{ color: 'white', fontSize: 14 }}>Events</a>
                  <ul class="dropdown" style={{ width: '80vw', marginLeft: 0, padding: 0, left: -24 }}>
                    <Box style={{ backgroundColor: 'white', marginTop: 24, paddingBottom: 20 }}>
                      <Stack spacing={2} direction="row" boxShadow={'0 3px 2px -2px gray'} paddingY={4}>
                        <Stack spacing={8} direction="row" paddingLeft={'16%'} >
                          <Stack style={{ color: 'black' }} direction={'column'} textAlign={'start'} spacing={1}>
                            <Typography className='submenuHead' color={'black'} fontWeight={'bold'} fontSize={20}>
                              Trade fairs & congresses
                            </Typography>
                            {EVENTS.map((text) => (
                              <Typography className='submenuItem' color={'#383D47'} fontWeight={300} fontSize={13}>{text}</Typography>
                            ))}
                          </Stack>
                        </Stack>
                      </Stack>
                    </Box>
                  </ul>
                </li>
                <li>
                  <a href="#" style={{ color: 'white', fontSize: 14 }}>Resources</a>
                  <ul class="dropdown" style={{ width: '80vw', marginLeft: 0, padding: 0, left: -24 }}>
                    <Box style={{ backgroundColor: 'white', marginTop: 24, paddingBottom: 20 }}>
                      <Stack spacing={2} direction="row" boxShadow={'0 3px 2px -2px gray'} paddingY={4}>
                        <Stack spacing={8} direction="row" paddingLeft={'16%'} >
                          <Stack style={{ color: 'black' }} direction={'column'} textAlign={'start'} spacing={1}>
                            <Typography className='submenuHead' color={'black'} fontWeight={'bold'} fontSize={20}>
                              Mobility Blog
                            </Typography>
                            <Typography color={'#383D47'} fontWeight={300} fontSize={13}>Information and tips about MDE for SAP and other ERP systems.</Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Box>
                  </ul>
                </li>
              </ul>
            </div>
          </Box>
          <Box sx={{ flexGrow: 0,  display: { xs: 'none', md: 'flex' } }}>
            <Button style={{ border: 'white', backgroundColor: '#0070AC', }}>
              <Typography color={'white'} fontSize={12}>Request a demo</Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
      <DropdownDiv />
    </AppBar>
  )
}

export default Navbar;
