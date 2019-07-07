// @flow         		-*- mode: rjsx; js-indent-level: 2; -*-

import React, { Component } from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import MenuIcon from '@material-ui/icons/Menu';
import PlaceIcon from '@material-ui/icons/Place';
import ProcedureIcon from '@material-ui/icons/LibraryBooks';
import ChecklistIcon from '@material-ui/icons/PlaylistAddCheck';
import DocumentationIcon from '@material-ui/icons/Help';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//import logo from './logo_sml.png';

type Props = {
  title: string,
  useLogo: boolean,
  mobileOpen: boolean,
  setMobileOpen: boolean => void
};

export const drawerWidth = 240;

export const drawerMainStyles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth+theme.spacing.unit,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing.unit,
    },
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
  pagebar: {
    marginLeft: -theme.spacing.unit,
    marginTop: -theme.spacing.unit,
    marginRight: -theme.spacing.unit,
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
    fontFamily: "Rajdhani",
    textDecoration: "bold",
    padding: 0,
    minHeight: 40,
  },
  pagebar_nogap: {
    marginBottom: 0
  },
  pagebar_gap: {
    marginBottom: 2*theme.spacing.unit,
  },
  pagebarText: {
    marginLeft: 4*theme.spacing.unit,
    marginTop: theme.spacing.unit,
  }
});

const styles = theme => {
  console.log("THEME IS ", theme);
  return (
    {
      root: {
        display: 'flex',
      },
      drawer: {
        [theme.breakpoints.up('md')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
        backgroundColor: theme.palette.secondary.A100
      },
      appBar: {
        height: 60,
        width: "100%",
      },
      appBarContent: {
        [theme.breakpoints.up('md')]: {
          paddingLeft: drawerWidth+theme.spacing.unit
        },
        [theme.breakpoints.down('sm')]: {
          paddingLeft: theme.spacing.unit,
        },
      },
      menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth,
        color: theme.palette.getContrastText(theme.palette.secondary.light),
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
      },
      titleText: {
        fontFamily: "Rajdhani",
        textDecoration: "bold",
        marginBottom: 5
      }
    }
  )
}

class Sidebar extends Component<Props> {
  props: Props;

  render() {
    // console.log("sidebar component render props=", this.props);
    const {
      classes,
      title,
      useLogo,
      mobileOpen,
      setMobileOpen
    } = this.props; 

    const handleDrawerToggle = () => {
      console.log('handleDrawerToggle');
      setMobileOpen(!mobileOpen);
    };

    const drawer = (
      <div>
        <List>
          <ListItem button key="UserMenu">
            <ListItemIcon><MenuIcon /></ListItemIcon>
            <ListItemText primary="Alice" secondary="logged in"/>
          </ListItem>
        </List>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <Link to="/clients/">
            <ListItem button key="Clients">
              <ListItemIcon><GroupIcon /></ListItemIcon>
              <ListItemText primary="Clients"/>
            </ListItem>
          </Link>
          <Link to="/sites/">
            <ListItem button key="Sites">
              <ListItemIcon><PlaceIcon /></ListItemIcon>
            <ListItemText primary="Sites"/>
            </ListItem>
          </Link>
          <Link to="/jobs/">
            <ListItem button key="My Jobs">
              <ListItemIcon><EventIcon /></ListItemIcon>
              <ListItemText primary="My Jobs"/>
            </ListItem>
          </Link>

        </List>
        <Divider />
        <List>
          <Link to="/procedures/">
          <ListItem button key="Procedures">
            <ListItemIcon><ProcedureIcon /></ListItemIcon>
            <ListItemText primary="Procedures"/>
          </ListItem>
          </Link>
          <Link to="/checklists/">
            <ListItem button key="Checklists">
              <ListItemIcon><ChecklistIcon /></ListItemIcon>
              <ListItemText primary="Checklists"/>
            </ListItem>
          </Link>
          <Link to="/documentation/">
            <ListItem button key="Documentation">
              <ListItemIcon><DocumentationIcon /></ListItemIcon>
              <ListItemText primary="Documentation"/>
            </ListItem>
          </Link>
        </List>
      </div>
    );
    
    return (
      <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.appBarContent}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {useLogo?(<img src={logo} />):""}
          {(title!="")?(<Typography className={classes.titleText} variant="h4" color="inherit" noWrap>{title}</Typography>):""}
         </Toolbar>
      </AppBar>
      <nav className={classes.drawer} >
        <Hidden mdUp implementation="css">
          <Drawer
            className={classes.drawer}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
          <Drawer
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
      </Hidden>
      </nav>
      </div>
    );}
}

export default withStyles(styles)(withTheme()(Sidebar));

