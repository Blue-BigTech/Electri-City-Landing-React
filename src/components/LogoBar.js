import * as React from 'react';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Avatar from '@mui/material/Avatar';
// import MenuItem from '@mui/material/MenuItem';
import DehazeIcon from '@mui/icons-material/Dehaze';
import LogoPng from '../assets/logo.png';
import { 
  AppBar,
  Button,
  Box,
  Container,
  Drawer,
  IconButton,
  Tooltip,
  Toolbar,
  Typography
} from '@mui/material';
const menus = ['UniCred', 'Oceant', 'Events', 'Roadmap', 'About Us!'];

function LogoBar() {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  const RightMenu = () => {
    return (
      <Box component="div" style={{ width : 300, background : '#161751', height : "100%"}}>

      </Box>
    );
  };

  return (
    <AppBar position="static" style={{ background : '#161751' }}>
      <Container maxWidth="x2">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Tooltip title="Home">
            <IconButton>
              <img src={LogoPng} style={{ height : 80 }}/>
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
    </AppBar>
  );
}
export default LogoBar;