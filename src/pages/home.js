import React from 'react';
import {indigo} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

import Title from '../components/title';
import Benefits from '../components/benefits';
import PlaceCard from '../components/places/placeCard';


import data from '../request/places';

export default class Home extends React.Component {

  places(){
    return  data.places.map((place,index)=>{
      return (
        <PlaceCard place={place} key={index} />
      );
    });
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
          <div className="row">
            {this.places()}
          </div>
        </div>
      </section>
    );
  }
}
