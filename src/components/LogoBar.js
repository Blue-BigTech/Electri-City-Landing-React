import * as React from 'react';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Avatar from '@mui/material/Avatar';
// import MenuItem from '@mui/material/MenuItem';
import DehazeIcon from '@mui/icons-material/Dehaze';
import LogoPng from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { 
  AppBar,
  Avatar,
  Button,
  Box,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  MenuItem,
  Tooltip,
  Toolbar,
  Typography
} from '@mui/material';
import Data from '../data/data.json';

// import './LogoBar.css';

function LogoBar() {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  const RightMenu = () => {
    return (
      <Box component="div" style={{ width : 300, background : '#161751', height : "100%"}}>
        <Avatar src={LogoPng} style={{ width : 40, padding: "1rem", margin: "0.5rem auto"}}/>
        {Data.map((menu, index) => (
          <MenuItem key={index} style={{margin : '0 10%'}} component={Link} to={menu.to}>
            <Typography textAlign="center" color={'white'} style={{width : '100%'}}>{menu.title}</Typography>
          </MenuItem>
        ))}
      </Box>
    );
  };

  return (
    <AppBar component="nav" style={{ background : '#161751' }}>
      <Container maxWidth="x2">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Tooltip title="Home">
            <IconButton>
              <img src={LogoPng} style={{ height : 70, margin : 20, marginLeft : 0 }}/>
              <Typography style={{color : 'white'}}>ElectriCity</Typography>
            </IconButton>
          </Tooltip>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex' } }}>
            <Tooltip title="Shop">
              <Button
                  key="shop"
                  // onClick={}
                  sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Shop
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
      <CssBaseline />
    </AppBar>
  );
}
export default LogoBar;