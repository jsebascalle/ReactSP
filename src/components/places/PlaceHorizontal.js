import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';

export default class PlaceHorizontal extends React.Component{
  render(){
    return(
      <Card style={{'marginTop': '1em', 'overflow': 'hidden'}}>
        <div className="row">
          <div className="PlaceH-avatar">
            <img src={this.props.place.avatarImage } />
          </div>
          <div className="col-xs" style={{'textAlign':'left'}}>
            <CardHeader
              title={this.props.place.title}
              subtitle={this.props.place.address}
              />
              <div className="row middle-xs">
                <CardContent className="col-xs-6 col-sm-8 col-lg-9" >
                  <Typography>{this.props.place.description}</Typography>
                </CardContent>
                <div className="col-xs">
                  <CardActions>
                    <IconButton aria-label="Add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <Button variant="text" href={"/lugares/"+this.props.place.slug} color="secondary">
                      Leer más
                    </Button>
                    <Button variant="text" color="primary" onClick={()=> this.props.onRemove(this.props.place)}>
                      Ocultar
                    </Button>
                  </CardActions>
                </div>
              </div>
          </div>
        </div>
      </Card>

    );
  }
}
