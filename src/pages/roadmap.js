import * as React from 'react';
import { useEffect } from 'react';
import {
  Container,
  Grid,
  Typography
} from '@mui/material';
import './pages.css';
export default function Roadmap() {
  useEffect(() => {
    document.title = 'Roadmap - ElectriCity';
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth={false} disableGutters sx={{marginTop : '103px'}}>
        <div className='bg-img-roadmap'>
          <Grid container spacing={2}>
            <Grid item md={4} xs={1}></Grid>
            <Grid item md={4} xs={10}>
              <div>
                <Typography variant='h3' >Roadmap</Typography><br/><br/>
                <Typography variant='h4' textAlign="left">2023</Typography><br/>
                <Typography variant='h4' textAlign="left">January</Typography><br/>
                <Typography variant='h6' textAlign="left">-Check for Nurtle’s efficiency. (Late January - Late July).</Typography><br/>
                <Typography variant='h6' textAlign="left">-Finish Nurtle’s final design</Typography><br/>
                <Typography variant='h6' textAlign="left">-Continue developing the front-end of the platform.</Typography><br/>
                <Typography variant='h4' textAlign="left">February</Typography><br/>
                <Typography variant='h6' textAlign="left">-End of front-end development of the  platform.</Typography><br/>
                <Typography variant='h6' textAlign="left">-Attend Investor’s meeting in Dubai.</Typography><br/>
                <Typography variant='h6' textAlign="left">-Finish BOT for UniCred token control. </Typography><br/>
                <Typography variant='h6' textAlign="left">-Verify and test the BOT.</Typography><br/>
                <Typography variant='h4' textAlign="left">March</Typography><br/>
                <Typography variant='h6' textAlign="left">-Begin UniChat’s back-end development, approximately take a month to complete it. </Typography><br/>
                <Typography variant='h6' textAlign="left">-Publish UniCred on CoinMarketCap and begin doing a tour around the world to announce it.</Typography>          <Typography variant='h6' textAlign="left">-Start looking to hire another back-end developer to speed up the process and take 2-3 weeks to finish the back-end of each tab. </Typography><br/>
                <Typography variant='h4' textAlign="left">Aprl</Typography><br/>
                <Typography variant='h6' textAlign="left">-Begin development of UniTracker and have the verification method already available.</Typography><br/>
                <Typography variant='h6' textAlign="left">-Continue the hunt for investors for Nurtle.</Typography><br/>
                <Typography variant='h4' textAlign="left">May</Typography><br/>
                <Typography variant='h6' textAlign="left">-Begin development of the auctioning system in “Leaderboards” tab.</Typography><br/>
                <Typography variant='h6' textAlign="left">-Continue creating the logic for the “Exchange” tab</Typography><br/>
                <Typography variant='h4' textAlign="left">June</Typography><br/>
                <Typography variant='h6' textAlign="left">-Start the back-end development of the “Audit” tab</Typography><br/>
                <Typography variant='h4' textAlign="left">July-September</Typography><br/>
                <Typography variant='h6' textAlign="left">-Develop the back-end for “Dashboard” , “Leaderboard” and “Exchange” tabs.</Typography><br/>
                <Typography variant='h4' textAlign="left">October</Typography><br/>
                <Typography variant='h6' textAlign="left">-BETA testing will release</Typography><br/>
                <Typography variant='h4' textAlign="left">November</Typography><br/>
                <Typography variant='h6' textAlign="left">ALPHa will release.</Typography><br/>
                <Typography variant='h4' textAlign="left">December</Typography><br/>
                <Typography variant='h6' textAlign="left">-Full release of all tabs on the platform.</Typography><br/>
              </div>
            </Grid>
            <Grid item md={4} xs={1}></Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}

