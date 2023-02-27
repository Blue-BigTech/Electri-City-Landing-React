import * as React from 'react';
import {
  Box,
  Container
} from '@mui/material';
import Bg from '../assets/Roadmap.jpg';

export default function Roadmap() {
  return (
    <React.Fragment>
      <Container maxWidth={false} disableGutters sx={{marginTop : '63px'}}>
        <Box style={{position : "relative", textAlign : "center"}}>
          <img src={Bg} width = '100%' style={{objectFit: 'cover'}}/>
          adfadfasdfasdfasdf
        </Box>
      </Container>
    </React.Fragment>
  );
}

