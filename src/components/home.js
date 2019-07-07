// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles, withTheme } from '@material-ui/core/styles';
//import { Document, Outline, Page } from 'react-pdf';
import { drawerMainStyles } from './sidebar';
import Pagebar from './pagebar';

type Props = {
};

const styles = theme => Object.assign({
}, drawerMainStyles(theme));

class Home extends Component<Props> {
  
  props: Props;

  render() {
    console.log("home component render props=", this.props);
    const {
      classes,
      // theme,
    } = this.props;

    return (
      <div className={classes.root}>
        <Pagebar title="Home"/>
      </div>
    );}
}

export default withStyles(styles)(withTheme()(Home));
