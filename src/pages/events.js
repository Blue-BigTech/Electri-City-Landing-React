import * as React from 'react';
import { useEffect } from 'react';
import {
  Container,
  Grid,
  Typography
} from '@mui/material';
import EventCard from '../components/EventCard';
import './pages.css';
import DubaiImg from '../assets/event-dubai.jpg';
import TexasImg from '../assets/event-texas.jpg';
import KyotoImg from '../assets/event-kyoto.jpg';
import LondonImg from '../assets/event-london.jpg';
import QuestionImg from '../assets/question.png';

export default function Event() {
  useEffect(() => {
    document.title = 'Events - ElectriCity';
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth={false} disableGutters sx={{marginTop : '103px'}}>
        <div className='event-banner padding-lr-10'>
          <p className='unicred-banner-title'>Event</p>
        </div>
        <div className='padding-90 ocean-banner-body'>
          <Grid container spacing={5}>
            <Grid item md={12} xs={12}>
              <div className='padding-lr-10'>
                <p className='text-fixed-size-35'>Past Events</p>
              </div>
            </Grid>
            <Grid item md={4} xs={12}>
              <EventCard title="Dubai : UAE" desc="Feb 09 2022" img={DubaiImg}/>
            </Grid>
          </Grid>
        </div>
        <div className='padding-90 ocean-banner-body'>
          <Grid container spacing={5}>
            <Grid item md={12} xs={12}>
              <div className='padding-lr-10'>
                <p className='text-fixed-size-35'>Upcomings...</p>
              </div>
            </Grid>
            <Grid item md={4} xs={12}>
              <EventCard title="Texas : USA" desc="2023" img={TexasImg}/>
            </Grid>
            <Grid item md={4} xs={12}>
              <EventCard title="Kyoto : Japan" desc="2023" img={KyotoImg}/>
            </Grid>
            <Grid item md={4} xs={12}>
              <EventCard title="London : UK" desc="2023" img={LondonImg}/>
            </Grid>
            <Grid item md={4} xs={12}>
              <EventCard title="" desc="2024" img={QuestionImg}/>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}

