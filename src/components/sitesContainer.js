// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Sites from './sites'
import * as SitesActions from './sitesActions';
import { type SitesState } from './sitesReducer';

function mapStateToProps(state) : SitesState {
  // console.log('sitesContainer mapStateToProps ', state);
  return ({
    ...state.sites
  });
}

function mapDispatchToProps(dispatch) {
  // console.log("sitesContainer mapDispatchToProps actions = ", SidebarActions);
  return bindActionCreators(SitesActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sites);
