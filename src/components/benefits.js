import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Favorite, Star, WifiOff } from '@material-ui/icons';
import {lightBlue,yellow,pink} from '@material-ui/core/colors';


export default class Benefits extends React.Component {
  render() {
    return (
      <div className="row">
        <Card className="Header-benefit">
          <div className="row">
            <div className="Header-benefit-icon" style={{ fontSize: 100, backgroundColor: pink['A400'] }}>
              <Favorite style={{ fontSize: 100, color:"#fff"}} />
            </div>
            <div className="Header-benefit-content">
              <CardHeader title="Calificaciones con emociones" />
              <CardContent>
                <Typography color="textSecondary" component="p">Califica tus lugares favoritos</Typography>
              </CardContent>
            </div>
          </div>
        </Card>
        <Card className="Header-benefit">
          <div className="row">
            <div className="Header-benefit-icon" style={{ fontSize: 100, backgroundColor: lightBlue['A400'] }}>
              <WifiOff style={{ fontSize: 100, color:"#fff"}} />
            </div>
            <div className="Header-benefit-content">
              <CardHeader title="¿Sin internet? No hay problema" />
              <CardContent>
                <Typography color="textSecondary" component="p">Places funciona sin internet</Typography>
              </CardContent>
            </div>
          </div>
        </Card>
        <Card className="Header-benefit">
          <div className="row">
            <div className="Header-benefit-icon" style={{ fontSize: 100, backgroundColor: yellow['A400'] }}>
              <Star style={{ fontSize: 100, color:"#fff"}} />
            </div>
            <div className="Header-benefit-content">
              <CardHeader title="Calificaciones con emociones" />
              <CardContent>
                <Typography color="textSecondary" component="p">Califica tus lugares favoritos</Typography>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
