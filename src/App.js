import React, {Component} from 'react';

import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import './App.css';

import { withRouter } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';


class App extends Component{
  constructor(props){
      super(props);
  }
  render(){
    return (
      <section>
        <Navigation/>
        <TransitionGroup >
            <CSSTransition classNames='left-out' timeout={300} key={this.props.location.pathname.split('/')[1]}>
              {this.props.children}
            </CSSTransition>
        </TransitionGroup>
      </section>
    )
  };
}

export default withRouter(App);
