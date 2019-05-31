import React from 'react';
import {indigo} from '@material-ui/core/colors';
import { TransitionGroup } from 'react-transition-group';
import Button from '@material-ui/core/Button';

import Title from '../components/Title';
import Benefits from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard';


import data from '../request/places';

export default class Home extends React.Component {

  constructor(props){
      super(props);

      this.state = {
        places : data.places
      }

      this.hidePlace = this.hidePlace.bind(this);
  }

  places(){
    return this.state.places.map((place,index)=>{
      return(
        <PlaceCard onRemove={this.hidePlace} place={place} key={index} />
      );
    })
  }


  hidePlace(place){
    this.setState({
      places: this.state.places.filter(el => el !== place)
    })
  }

  render() {
    return (
      <section>
        <div className="Header-background">
          <div className="container">
            <div className="Header-main">
              <Title />
              <Button variant="contained" color="secondary">Crear cuenta gratuita</Button>
              <img className="Header-image" alt="" scr={ process.env.PUBLIC_URL +'/images/6.jpg' } />
            </div>
            <Benefits />
          </div>
        </div>
        <div style={{'backgroundColor': indigo['A400'], 'padding':'50px'}}>
        <h3 style={{color:"white"}}><strong>Lugares Populares</strong></h3>
          <TransitionGroup className="row">
            {this.places()}
          </TransitionGroup>
        </div>
      </section>
    );
  }
}
