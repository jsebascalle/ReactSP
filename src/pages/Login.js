import React from 'react';

import Title from '../components/Title';
import Container from '../components/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { login, signUp } from '../requests/auth';
import { connect } from 'react-redux';
import * as actions  from '../actions/userActions';

import {
  Link,
  Route
} from 'react-router-dom';

class Login extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.requestAuth = this.requestAuth.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value});
  }

  requestAuth(){
    const credentials = {
      email: this.state.email,
      password: this.state.password,
    }

    login(credentials).then(data =>{this.props.dispatch(actions.login(data.jwt))}).catch(console.log);
  }

  createAccount(){
    const credentials = {
      email: this.state.email,
      password: this.state.password,
    }

    signUp(credentials).then(console.log).catch(console.log);
  }

  auth(data){
    this.props.dispatch(actions.login(data.jwt));
    this.props.dispatch(actions.loadUser(data.user));

  }



  render(){
    return(
      <div className="row middle-xs">
        <div className="col-xs-12 col-sm-6">
        <Container>
          <div style={{'textAlign':'left'}}>
            <Title />

            <TextField
              placeholder="Correo electrónico"
              fullWidth
              margin="normal"
              variant="outlined"
              type="email"
              className="textfield"
              ref="emailField"
              name="email"
              onChange={this.handleChange}
            />
            <TextField
              placeholder="Contraseña"
              type="password"
              className="textfield"
              margin="normal"
              variant="outlined"
              fullWidth
              ref="passwordField"
              name="password"
              onChange={this.handleChange}
            />

            <div className="Login-actions">

              <Route path="/login" exact render={()=>{
                    return(
                      <div>
                        <Link to="/signup" style={{marginRight:"1em"}}>Crear nueva cuenta</Link>
                        <Button onClick={this.requestAuth}  variant="contained" color="secondary" >Ingresar</Button>
                      </div>
                    );
                }}></Route>
              <Route path="/signup" exact render={()=>{
                      return(
                        <div>
                          <Link to="/login" style={{marginRight:"1em"}}>Ya tengo cuenta</Link>
                          <Button onClick={this.createAccount} variant="contained" color="secondary">Crear cuenta</Button>
                        </div>
                      );
                  }}></Route>
            </div>
          </div>
        </Container>
        </div>
        <div className="col-xs-12 col-sm-6">
        <div>
          <Route path="/login" exact render={()=>
              <div className="Login-background" style={{'backgroundImage': "url("+process.env.PUBLIC_URL + '/images/login-background.jpg'+")"}}></div>
            }></Route>
          <Route path="/signup" exact render={()=>
              <div className="Login-background" style={{'backgroundImage': "url("+process.env.PUBLIC_URL + '/images/friends.jpg'+")"}}></div>
            }></Route>

        </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login);
