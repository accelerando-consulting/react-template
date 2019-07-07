// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import React, { Component } from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import classNames from 'classnames';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { drawerMainStyles } from './sidebar';

const styles = theme => Object.assign(
  {
  },
  drawerMainStyles(theme)
);

type Props = {
  title: string,
  nogap: boolean
};

class Pagebar extends Component<Props> {
  props: Props;

  render() {
    console.log("pagebar component render props=", this.props);
    const {
      classes,
      title,
      nogap=false,
    } = this.props;

    return (
      <Toolbar className={classNames(classes.pagebar,
                                     {
                                       [classes.pagebar_nogap]: nogap,
                                       [classes.pagebar_gap]: !nogap
                                     })
                         }
               variant="dense" >
        <Typography className={classes.pagebarText} variant="h6" color="inherit" noWrap>{title}</Typography>
      </Toolbar>
    )
  };
}

export default withStyles(styles)(withTheme()(Pagebar))
