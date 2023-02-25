import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import DehazeIcon from '@mui/icons-material/Dehaze';
import LogoPng from '../assets/logo.png';

const pages = ['Blog'];

function LogoBar() {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" style={{ background : '#161751' }}>
      <Container maxWidth="x2">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton>
            <img src={LogoPng} style={{ height : 64 }}/>
            <Typography style={{color : 'white'}}>ElectriCity</Typography>
          </IconButton>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex' } }}>
            <Tooltip title="Open settings">
              <Button
                  key="shop"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Shop
              </Button>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={toggleMenu} sx={{ p: 1 }}>
                <DehazeIcon style={{ color : 'white' }}/>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default LogoBar;