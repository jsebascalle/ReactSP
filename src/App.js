import React, {Component} from 'react';

import './App.css';
import Home from './pages/home';

class App extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <section>
        <Home />
      </section>
    )
  };
}

export default App;
