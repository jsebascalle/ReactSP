import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Place from './pages/Place';
import App from './App';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

class Router extends React.Component{
  signedInRoutes(){
    if(this.props.user.jwt){
      return(
        <Route path="/new" render={()=><h1>Bienvenido</h1>} />
      );
    }
  }

  home(){
    if(this.props.user.jwt) return Dashboard;

    return Home;
  }

  render(){
    return(
      <ConnectedRouter history={this.props.history}>
        <App>
          <Switch>
          <Route exact path="/" component={this.home()}></Route>
          <Route path="/lugares/:slug" component={Place} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Login} />
          {this.signedInRoutes()}
          </Switch>
        </App>
      </ConnectedRouter>
    );
  }
}

function mapStateToProps(state,ownProps){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Router);
