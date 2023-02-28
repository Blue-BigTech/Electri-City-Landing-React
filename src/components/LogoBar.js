import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
    CssBaseline
} from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';

import Data from '../data/data.json';

import LogoPng from '../assets/logo.png';

export default function LogoBar(props) {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
      setOpen(!open);
  };
  const RightMenu = () => {
      return (
      <Box component="div"
        sx={{ 
          width : 300, 
          height : "100%", 
          background : '#223', 
          padding : '10%'}}
      >
        {Data.map((menu, index) => (
          <MenuItem key={index}>
            <Link to={menu.to} onClick={toggleMenu} style={{textDecoration : 'none', width : '100%'}}>
              <Typography textAlign="center" color={'white'} style={{width : '100%'}}>{menu.title}</Typography>
            </Link>            
          </MenuItem>
        ))}
      </Box>
      );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar sx={{ background : '#161751', padding : '40px 0' }}>
        <Container maxWidth="x2" sx={{padding : 0}}>
          <Toolbar sx={{ justifyContent: "space-between", minHeight:'70px' }}>
            <Tooltip title="Home">
              <IconButton href='/'>
                <img src={LogoPng} style={{ height : '70px', marginRight : '20px' }}/>
                <Typography variant='h6' style={{color : 'white'}}>ElectriCity</Typography>
              </IconButton>
            </Tooltip>

            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex' } }}>
              <Tooltip title="Shop">
              <Button
                  key="shop"
                  // onClick={}
                  sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography variant='h6'>Shop</Typography>
              </Button>
              </Tooltip>
              <Tooltip title="Menu">
              <IconButton onClick={toggleMenu} sx={{ p: 1 }}>
                  <DehazeIcon style={{ color : 'white' }}/>
              </IconButton>
              </Tooltip>
            </Box>
            <Drawer open={open} anchor="right" onClose={toggleMenu}>
              <RightMenu />
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
}