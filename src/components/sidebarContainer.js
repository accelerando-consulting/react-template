// @flow         		-*- mode: rjsx; js-indent-level: 2; -*-

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Sidebar from './sidebar'
import * as SidebarActions from './sidebarActions';
import { type SidebarState } from './sidebarReducers';
	 
function mapStateToProps(state) : SidebarState {
  // console.log('sidebarContainer mapStateToProps ', state);
  return ({
    ...state.sidebar
  });
}

function mapDispatchToProps(dispatch) {
  // console.log("sidebarContainer mapDispatchToProps actions = ", SidebarActions);
  return bindActionCreators(SidebarActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
