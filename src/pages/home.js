import * as React from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    Drawer,
    Fab,
    Fade,
    IconButton,
    Link,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
    CssBaseline,
    useScrollTrigger
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DehazeIcon from '@mui/icons-material/Dehaze';

import Data from '../data/data.json';
import PageItem from '../components/PageItem';

import LogoPng from '../assets/logo.png';
import UniCred from '../assets/UniCred.jpg';
import Ocean from '../assets/Ocean.png';
import About from '../assets/About.jpg';
import Roadmap from '../assets/Roadmap.jpg';
function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Home(props) {
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
          <MenuItem key={index} component={Link} to={menu.to}>
              <Typography textAlign="center" color={'white'} style={{width : '100%'}}>{menu.title}</Typography>
          </MenuItem>
        ))}
      </Box>
      );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar sx={{ background : '#161751', padding : '20px' }}>
        <Container maxWidth="x2" sx={{padding : 0}}>
          <Toolbar sx={{ justifyContent: "space-between", minHeight:'70px' }}>
            <Tooltip title="Home">
              <IconButton>
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
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}