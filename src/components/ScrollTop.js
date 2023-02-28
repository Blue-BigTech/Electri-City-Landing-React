import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Fab,
    Fade,
    useScrollTrigger
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
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

export default function ScrollTopComponent(props) {
  return (
    <React.Fragment>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
        <HomeIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}