import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {indigo} from '@material-ui/core/colors';


export default class MyAppBar extends React.Component{
  render(){
    return(
      <AppBar
        title="Places"
        style={{'backgroundColor': indigo['A600']}}
        onTitleTouchTap={this.props.goHome}
        showMenuIconButton={false}
      />
    );
  }
}
