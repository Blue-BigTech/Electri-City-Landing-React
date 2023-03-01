import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  Typography,
  MenuItem,
  Toolbar
} from '@mui/material';
// import Fab from '@mui/material/Fab';


// const StyledFab = styled(Fab)({
//   position: 'absolute',
//   zIndex: 1,
//   top: -30,
//   left: 0,
//   right: 0,
//   margin: '0 auto',
// });

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary" sx={{background : '#161751', top: 'auto', bottom: 0 }}>
        <Toolbar>
          {/* <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab> */}
          <Grid container spacing={5}>
            <Grid item md={1} xs={0} />
            <Grid item md={4} xs={12}>
              <p className='content-left text-fixed-size-25'>ElectriCity</p>
              <p className='content-left text-fixed-size-20'>Lucrative ideas shared within the company's space</p>
              <p className='content-left text-fixed-size-20'>With really interesting projects coming out in the near future</p>
              <p className='content-left text-fixed-size-20'>Made with Procreate and AutoCad</p>
              <p className='content-left text-fixed-size-25'>Photos taken by Bernardo Sambra (https://www.bernardosambra.com/work) </p>
            </Grid>
            <Grid item md={1} xs={12}/>
            <Grid item md={2} xs={12}>
              <p className='content-left text-fixed-size-25'>About</p>
              <div>
                  <Typography textAlign="left" color={'white'} style={{width : '100%'}}>
                    Who am I and Why am I doing this?
                  </Typography>
              </div>
            </Grid>
            <Grid item md={3} xs={12}>
              <p className='content-left text-fixed-size-25'>Projects</p>
              <p className='content-left text-fixed-size-20'>Micro-plastic Collector Design</p>
              <p className='content-left text-fixed-size-20'>Supersonic-Electric Plane Design</p>
              <p className='content-left text-fixed-size-20'>Kinetic Nanogenerator Design</p>
              <p className='content-left text-fixed-size-20'>More Upcoming in the near future!</p>
            </Grid>
            <Grid item md={1} xs={12}/>
          </Grid>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
