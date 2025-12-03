import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
function Checkup({image,title,text,share,learn}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt='medical'
        height="200"
        width="20"
        image={image}
        style={{objectFit : 'cover'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/contact'><Button size="small">{share}</Button></Link>
        <Button size="small">{learn}</Button>
      </CardActions>
    </Card>
  );
}

export default Checkup;