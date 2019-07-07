// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import React, { Component } from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Document, Outline, Page } from 'react-pdf';
import { drawerMainStyles } from './sidebar';

import proceduresPDF from './procedures.pdf';

export type ProceduresAction = {
  +type: string,
};

type ProceduresState = {
  pageNumber: number,
}

const initialState: ProceduresState = {
  pageNumber: 1,
}

const styles = theme => Object.assign(
  {
    foo: {backgroundColor: "#f00"}
  },
  drawerMainStyles(theme));


type ProceduresProps = {
  pageNumber: Number,
};

class ProceduresComponent extends Component<ProceduresProps> {
  
  props: ProceduresProps;

  onItemClick = ({pageNumber}) => {
    console.log(`Set page number ${pageNumber}`);
  }

  render() {
    console.log("procedures component render props=", this.props);
    const {
      classes,
      // theme,
    } = this.props;

    return (
      <div className={classes.root}>
        <h1>Procedure document</h1>
        <Document file={proceduresPDF}>
          <Outline onItemClick={this.onItemClick} />
          <Page pageNumber={1} />
        </Document>
      </div>
    );}
};

export const ProceduresActions = {
  // Action functions here
};

export const proceduresReducer = (
  state: ProceduresState = initialState,
  action: ProceduresAction
) : ProceduresState => {
  if (!Object.keys(ProceduresActions).filter(k=>k.match(/^[A-Z_]+$/)).includes(action.type)) {
    // This action is not addressed to this component, ignore it
    return state;
  }
  console.log('proceduresReducer action=', action);
  console.log('proceduresReducer state=', state);

  switch (action.type) {
  default:
    console.error('Procedures reducer did not handle action ', action);
    return state;
  }
}

function mapStateToProps(state) : ProceduresState {
  // console.log('proceduresContainer mapStateToProps ', state);
  return ({
    ...state.procedures
  });
}

function mapDispatchToProps(dispatch) {
  // console.log("proceduresContainer mapDispatchToProps actions = ", SidebarActions);
  return bindActionCreators(ProceduresActions, dispatch);
}

export const Procedures = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withTheme()(ProceduresComponent)))
