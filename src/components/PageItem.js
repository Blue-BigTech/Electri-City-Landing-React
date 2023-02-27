import * as React from 'react';
import { 
    Box,
    Button,
    Typography
} from '@mui/material';
  
function PageItem({title, description, bg, height, to}) {
    return (
        <Box style={{position : "relative", textAlign : "center"}}>
            <img src={bg} width = '100%' height={height} style={{objectFit: 'cover'}}/>
            <Typography
              variant = 'h4'
              sx={{
                position : "absolute",
                top : "5%", 
                left : "5%"
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant='h6'
              component="p" 
              textAlign="left"
              sx={{
                whiteSpace : "pre-wrap",
                position : "absolute", 
                top : "50%", 
                left : "5%", 
                transform : "translate(0%, -50%)"}}
            >
                {description.length >50 ? description.substr(0, 50) + "..." : description}
            </Typography>
            <Button 
              variant="outlined" 
              href={to}
            //   color='white'
              sx={{
                ':hover' : {borderColor: 'primary', color:'primary'},
                borderColor : 'white',
                color : 'white',
                position : "absolute",
                bottom : "10%", 
                left : "5%"
              }}
            >
                <Typography variant='h6'>
                    Learn More
                </Typography>
            </Button>
        </Box>
    );
}
export default PageItem;