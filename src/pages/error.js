import * as React from 'react';
import { useEffect } from 'react';
import {
  Container,
  Grid,
  Typography
} from '@mui/material';
import './pages.css';
export default function Error() {
  useEffect(() => {
    document.title = 'Roadmap - ElectriCity';
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth={false} disableGutters sx={{marginTop : '103px'}}>
        <br/><br/><br/><br/>
        <Typography variant='h1'>404</Typography>
        <br/><br/><br/><br/>
      </Container>
    </React.Fragment>
  );
}

