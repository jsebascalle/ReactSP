import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { CSSTransition } from 'react-transition-group';

export default class PlaceCard extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <CSSTransition
        in={this.props.in}
        timeout={300}
        classNames="card-place">
      <div className="col-xs-12 col-sm-4 card-place" key={this.props.index}>
        <Card >
          <CardHeader
            title={this.props.place.title}
          />
          <CardMedia
            image={process.env.PUBLIC_URL + this.props.place.imageUrl}
            title={this.props.place.title}
            style={{paddingTop: '56.25%'}}
          />
          <CardContent>
            <Typography  color="textSecondary" component="p">
              {this.props.place.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Button variant="text" color="secondary">
              Leer más
            </Button>
            <Button variant="text" color="primary" onClick={()=> this.props.onRemove(this.props.place)}>
              Ocultar
            </Button>
          </CardActions>
        </Card>
      </div>
      </CSSTransition>
    );
  }
}
