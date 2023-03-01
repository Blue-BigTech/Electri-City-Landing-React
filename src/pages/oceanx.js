import * as React from 'react';
import { useEffect } from 'react';
import {
  Container,
  Grid,
  Typography
} from '@mui/material';
import './pages.css';
import Item1 from '../assets/ocean-item-1.jpg';
import Item2 from '../assets/ocean-item-2.jpg';
import Item3 from '../assets/ocean-item-3.jpg';
export default function OceanX() {
  useEffect(() => {
    document.title = 'Ocean - ElectriCity';
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth={false} disableGutters sx={{marginTop : '103px'}}>
        <div className='ocean-banner'>
          <p className='ocean-banner-title'>OceanX</p>
        </div>
        <div className='ocean-banner-body'>
          <Grid container spacing={2}>
            <Grid item md={2} xs={1}></Grid>
            <Grid item md={8} xs={10}>
              <div className='ocean-body-abstract'>
                <p className='content-left text-fixed-size-20' textAlign="left">Nurtle is the first step into collecting micro-plastics. </p>
                <p className='content-left text-fixed-size-20' textAlign="left">Join Ocean+ and support us in clearing micro-plastics from the water so that human and marine life can be protected.</p>
              </div>
            </Grid>
            <Grid item md={2} xs={1}></Grid>
          </Grid>
          <div className='width-80'>
            <Grid container spacing={0} display={{md : 'none', xs : 'flex'}}>
              <Grid item xs={12}>
                  <p className='content-left text-fixed-size-25 margin-top-10vh'>
                    Micro-plastics and its consequences
                  </p>
                  <p className='content-left text-fixed-size-20' textAlign="left">
                    Micro-plastics reside in all places around Earth but most of its pollution is in the ocean, where people least expect it.
                  </p>
                  <p className='content-left text-fixed-size-20' textAlign="left">
                    The primary cause of action is marine life. The majority of marine diversity is being affected by excessive marine pollution as well as many ecosystems and fish groups causing them to decrease in population.
                  </p>
                  <p className='content-left text-fixed-size-20' textAlign="left">
                    This marine catastrophe is not only affecting marine life but also humans.
                  </p>
                  <p className='content-left text-fixed-size-20' textAlign="left">
                    Micro-plastics reside in all places around Earth but most of its pollution is in the ocean, where people least expect it.
                  </p>
              </Grid>
              <Grid item xs={12}>
                <img className='img-original' src={Item1}/>
              </Grid>

              <Grid item xs={12}>
                <p className='content-left text-fixed-size-25 margin-top-10vh'>
                  Project: Nurtle
                </p>
                <p className='content-left text-fixed-size-20' textAlign="left">
                  Nurtle is a prototype that offers a service to filter micro-plastics from bodies of water e.g. ponds, lakes, rivers…etc. Nurtle is built with an algorithmic intelligent system powered by a sever manager, making it an automated machine. – It is made of a light carbon fibre layer with a fibre glass layer attached to protect the inside machinery from extraneous impacts or animal attacks.
                </p><br/>
                <p className='content-left text-fixed-size-20' textAlign="left">
                  The machinery includes a system that collects and processes water into a desalinator (generating some energy) that is directly connected to a hydrogen motor. Heat converted into energy causes the separation of water molecules (by solar panels). All of this energy is transferred to the Nurtle's propulsion hydrogen powered turbines, as well as the AI and navigation systems.– This machine will collect all compressed micro-plastic and other micro-elements, placing them in a bag, and ejecting them for a drone to pick up.
                </p>
                <p className='content-left text-fixed-size-20' textAlign="left">
                  Finally, this is the simple explanation of how the Nurtle works but the complexities are in the machinery as well as the drone targeting system, that is custom made for this specific project.
                </p>
                <Typography variant='p' textAlign="left">
                  (Here are the designs, are patented all under company name: ElectriCity Tech Ltd).
                </Typography><br/>
              </Grid>
              <Grid item xs={12}>
                <img className='img-original' src={Item2}/>
              </Grid>

              <Grid item xs={12}>
                <p className='content-left text-fixed-size-25 margin-top-10vh'>
                  Campaign details
                </p>
                <p className='content-left text-fixed-size-20' textAlign="left">
                  To remove microplastics and other microscopic materials from the water, we created this micro-plastic collector. There can be 200 collectors for a total of $33,333.33 each. Unexpected inflation rates could cause the price to change and the designs to appreciate differently. Three campaigns—Indiegogo, Kickstarter, and Seedinvest—will receive the funding. Each campaign seeks to raise between $1,000,000 and $2,000,000 in order to cover costs and maintain business operations. Additionally, the cost of some necessary components is rising, making it more expensive.
                </p>
                <p className='content-left text-fixed-size-20' textAlign="left">
                  After the campaigns are over, you can stay involved in this journey by joining the company's patreon, where you can contribute and see a live broadcast of the project's construction and manufacture as well as in other social media platforms.
                </p>
                <Typography variant='p' fontStyle="italic" textAlign="left">
                  Buttons bellow are not available yet, but as soon as the campaigns are ready, there will be a social media post and in the website as well. 
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Kickstarter</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Indiegogo</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>GoFund Me</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <img className='img-original' src={Item3}/>
              </Grid>
            </Grid>

            <Grid container spacing={0} display={{xs : 'none', md : 'flex'}}>
              <Grid item md={5}>
                  <p className='content-left text-size-big margin-top-10vh'>
                    Micro-plastics and its consequences
                  </p>
                  <p className='content-left text-size-middle' textAlign="left">
                    Micro-plastics reside in all places around Earth but most of its pollution is in the ocean, where people least expect it.
                  </p>
                  <p className='content-left text-size-middle' textAlign="left">
                    The primary cause of action is marine life. The majority of marine diversity is being affected by excessive marine pollution as well as many ecosystems and fish groups causing them to decrease in population.
                  </p>
                  <p className='content-left text-size-middle' textAlign="left">
                    This marine catastrophe is not only affecting marine life but also humans.
                  </p>
                  <p className='content-left text-size-middle' textAlign="left">
                    Micro-plastics reside in all places around Earth but most of its pollution is in the ocean, where people least expect it.
                  </p>
              </Grid>
              <Grid item md={2}/>
              <Grid item md={5}>
                <img className='img-original margin-top-10vh' src={Item1}/>
              </Grid>

              <Grid item md={5}>
                <img className='img-original margin-top-10vh' src={Item2}/>
              </Grid>
              <Grid item md={2}/>
              <Grid item md={5}>
                <p className='content-left text-size-big margin-top-10vh'>
                  Project: Nurtle
                </p>
                <p className='content-left text-size-middle' textAlign="left">
                  Nurtle is a prototype that offers a service to filter micro-plastics from bodies of water e.g. ponds, lakes, rivers…etc. Nurtle is built with an algorithmic intelligent system powered by a sever manager, making it an automated machine. – It is made of a light carbon fibre layer with a fibre glass layer attached to protect the inside machinery from extraneous impacts or animal attacks.
                </p><br/>
                <p className='content-left text-size-middle' textAlign="left">
                  The machinery includes a system that collects and processes water into a desalinator (generating some energy) that is directly connected to a hydrogen motor. Heat converted into energy causes the separation of water molecules (by solar panels). All of this energy is transferred to the Nurtle's propulsion hydrogen powered turbines, as well as the AI and navigation systems.– This machine will collect all compressed micro-plastic and other micro-elements, placing them in a bag, and ejecting them for a drone to pick up.
                </p>
                <p className='content-left text-size-middle' textAlign="left">
                  Finally, this is the simple explanation of how the Nurtle works but the complexities are in the machinery as well as the drone targeting system, that is custom made for this specific project.
                </p>
                <Typography variant='p' textAlign="left">
                  (Here are the designs, are patented all under company name: ElectriCity Tech Ltd).
                </Typography><br/>
              </Grid>

              <Grid item md={5}>
                <p className='content-left text-size-big margin-top-10vh'>
                  Campaign details
                </p>
                <p className='content-left text-size-middle' textAlign="left">
                  To remove microplastics and other microscopic materials from the water, we created this micro-plastic collector. There can be 200 collectors for a total of $33,333.33 each. Unexpected inflation rates could cause the price to change and the designs to appreciate differently. Three campaigns—Indiegogo, Kickstarter, and Seedinvest—will receive the funding. Each campaign seeks to raise between $1,000,000 and $2,000,000 in order to cover costs and maintain business operations. Additionally, the cost of some necessary components is rising, making it more expensive.
                </p>
                <p className='content-left text-size-middle' textAlign="left">
                  After the campaigns are over, you can stay involved in this journey by joining the company's patreon, where you can contribute and see a live broadcast of the project's construction and manufacture as well as in other social media platforms.
                </p>
                <Typography variant='p' fontStyle="italic" textAlign="left">
                  Buttons bellow are not available yet, but as soon as the campaigns are ready, there will be a social media post and in the website as well. 
                </Typography><br/><br/><br/>
                <Grid container spacing={20}>
                  <Grid item md={4}>
                    <Typography>Kickstarter</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Indiegogo</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>GoFund Me</Typography><br/><br/><br/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={2}/>
              <Grid item md={5}>
                <img className='img-original margin-top-10vh' src={Item3}/>
              </Grid>
            </Grid>

          </div>
        </div>
        <div className='ocean-banner-bottom'>
          <p className='ocean-banner-title'>Let's change the world together!</p>
        </div>
      </Container>
    </React.Fragment>
  );
}

