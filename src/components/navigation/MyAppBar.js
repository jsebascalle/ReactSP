import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {indigo} from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Container from '../Container.js';
import {  Link } from 'react-router-dom';

export default class MyAppBar extends React.Component{
  render(){
    return(
      <AppBar
        title="Places"
        style={{'backgroundColor': indigo[600],padding:'5px'}}
        position="static"
      >
      <Container>
        <Typography variant="h6" align="left" >
              <Link to="/" style={{marginRight:"1em",textDecoration:'none',color:"white"}}>Places</Link>
        </Typography>
      </Container>
      </AppBar>
    );
  }
}
