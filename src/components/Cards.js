import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Cards = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardMedia className={classes.media} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Status
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Species
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gender
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Cards;
