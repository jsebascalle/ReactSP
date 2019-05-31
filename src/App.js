import React, {Component} from 'react';

import './App.css';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition'
import { withRouter } from 'react-router-dom';

import MyAppBar from './components/navigation/MyAppBar';


class App extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <section>
        <div>
          <MyAppBar goHome={this.goHome} />
          <TransitionGroup >
            <CSSTransition classNames='left-out' timeout={300} >
              {this.props.children}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </section>
    )
  };
}

export default App;
