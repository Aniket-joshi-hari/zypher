import React from 'react';
import cardcss from './card.css';
import classes from '../../App.css';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const cardChild = (props) => {

    
    return (
        <div>


<Card  className={cardcss.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="aboutUs"
          className={classes.media}
          height="150"
          image={props.customerimage}
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography gutterBottom variant="h6" component="h3">
         {props.heading}
          </Typography>
          <Typography component="p">
          {props.content}
          </Typography> 
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {props.share}
        </Button>
        <Button size="small" color="primary">
         {props.learnmore}
        </Button>
      </CardActions>
    </Card>
    
            
        </div>
    );
};

export default cardChild;