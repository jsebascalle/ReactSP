import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import {getPlaces} from '../requests/places';
import PlaceHorizontal from '../components/places/PlaceHorizontal';

export default class Dashboard extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      places : []
    }

    this.hidePlace = this.hidePlace.bind(this);

    this.loadPlaces();
  }


  loadPlaces(){
     getPlaces().then(jsonR=>{
       this.setState({
         places: jsonR.docs
       })
     })
   }

  places(){
    return this.state.places.map((place,index)=>{
      return(
        <PlaceHorizontal onRemove={this.hidePlace} place={place} key={index} />
      );
    })
  }


  hidePlace(place){
    this.setState({
      places: this.state.places.filter(el => el !== place)
    })
  }

  render(){
    return(
      <div>
      <Link to='/new' className="FAB" >
        <Fab color="secondary" aria-label="Add">
         <AddIcon />
       </Fab>
       </Link>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-2" style={{'textAlign':'left'}}>
              <Button>Explorar</Button>
              <Button>Favoritos</Button>
              <Button>Visitas Previas</Button>
            </div>
            <div className="col-xs-12 col-md-10">
                {this.places()}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
