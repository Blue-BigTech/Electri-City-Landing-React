import * as React from 'react';
import { useEffect } from 'react';

import {
  Grid,
  Container,
  Typography
} from '@mui/material';
import './pages.css';
import AboutMark from '../assets/about-mark.png';

export default function About() {
  useEffect(() => {
    document.title = 'About Us - ElectriCity';
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth={false} disableGutters sx={{marginTop : '103px'}}>
        <div className='bg-img-about padding-lr-10'>
          <Grid container spacing={1}>
            <Grid item md={5} xs={12}>
              <Typography variant='h2'>Who Am I? and Why Am I Doing This?</Typography>
            </Grid>
            <Grid item md={7} xs={12}>
              <Typography variant='h6' textAlign="left">
                I am Antonio G. Sunye, I am a university student at University of Bristol. My dream is that everyone in the world has access to new technology and are able to use it like everyone else in a sustainable way for it to be manageable. This is a new era of technological advancements that will shape the entire future and I want to be part of it. I believe everyone with hard work and dedication can leave their seed in this world, so why not?
              </Typography><br/>
              <Typography variant='h6' textAlign="left">
                I have been working in some projects that will help fight against pollution that will not only will help the environment but it will improve our mundane lives.
              </Typography><br/>
              <Typography variant='h6' textAlign="left">
                The main reason behind my intentions as to why enter the sustainability business, is that I want to contribute in the aid of preserving ecosystems and attain a new source of energy that everyone will have access to.
              </Typography>
              <img className='about-mark-img' src={AboutMark}/>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}

