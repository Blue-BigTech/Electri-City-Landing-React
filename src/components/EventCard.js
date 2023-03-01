import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function EventCard({title, desc, img}) {  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={'auto'}
          image={img}
          alt={title}
        />
        <CardContent sx={{backgroundColor: '#333'}}>
          <Typography gutterBottom variant="h5" component="div" color="white">
            {title}
          </Typography>
          <Typography variant="body2" color="white">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}