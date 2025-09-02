import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import CallIcon from '@mui/icons-material/Call';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import './Card.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

 function Card1 ({image,text,text1,text2,text3}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className='card2'>
      <CardHeader
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Package"
        className='image'
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.blue' }}>
        <i> <h2 style={{color : 'blue'}}> {text}</h2></i>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
    
        <Link to='/contact'><IconButton aria-label="Call" sx={{color:'red'}}>
        <CallIcon />
        </IconButton></Link>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Info : </Typography>
          <Typography sx={{ marginBottom: 2 }}>
           {text1}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
      {text2}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
          {text3}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default Card1;