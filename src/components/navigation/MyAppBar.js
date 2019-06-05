import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {indigo} from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Container from '../Container';
import {  Link } from 'react-router-dom';

import UserMenu from './UserMenu';


export default class MyAppBar extends React.Component{
  getName(){
    if(this.props.user.name)
      return this.props.user.name;
    if(this.props.user.email)
      return this.props.user.email.split("@")[0];
    return "";
  }

  title(){
    return (
      <span style={{'cursor': 'pointer', 'textTransform': 'capitalize'}}>
        {this.props.user.jwt ? 'Bienvenido ' + this.getName() : 'Places'}
      </span>
    );
  }

  showUserMenu(){
    if (this.props.user.jwt) {
      return (
          <UserMenu logout={this.props.logout} />
      );
    }
  }

  render(){
    return(
      <AppBar
        title="Places"
        style={{'backgroundColor': indigo[600],padding:'5px'}}
        position="static"
      >
      <Container>
        <div className="row">
          <div className="col-md-4">
            <Typography variant="h6" align="left" >
                  <Link to="/" style={{marginRight:"1em",textDecoration:'none',color:"white"}}>Places</Link>
            </Typography>
          </div>
          <div className="col-md">
            {this.showUserMenu()}
          </div>
        </div>
      </Container>
      </AppBar>
    );
  }
}
