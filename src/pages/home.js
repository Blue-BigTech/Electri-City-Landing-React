import * as React from 'react';
import {
    Box,
    Container
} from '@mui/material';

import Data from '../data/data.json';
import PageItem from '../components/PageItem';

import UniCred from '../assets/UniCred.jpg';
import Ocean from '../assets/Ocean.png';
import About from '../assets/About.jpg';
import Roadmap from '../assets/Roadmap.jpg';

export default function Home(props) {

  return (
    <React.Fragment>
      <Container maxWidth={false} disableGutters sx={{marginTop : '63px'}}>
        <Box sx={{ my: 1, margin : 0, padding : 0 }}>
          <PageItem 
            title={Data[0].title}
            description={Data[0].description}
            bg={UniCred}
            height="400px"
            to={Data[0].to}
          />
          <PageItem 
            title={Data[1].title}
            description={Data[1].description}
            bg={Ocean}
            height="400px"
            to={Data[1].to}
          />
          <PageItem 
            title={Data[2].title}
            description={Data[2].description}
            bg={UniCred}
            height="400px"
            to={Data[2].to}
          />
          <PageItem 
            title={Data[3].title}
            description={Data[3].description}
            bg={Roadmap}
            height="400px"
            to={Data[3].to}
          />
          <PageItem 
            title={Data[4].title}
            description={Data[4].description}
            bg={About}
            height="400px"
            to={Data[4].to}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
}