// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from './home'
import * as HomeActions from './homeActions';
import { type HomeState } from './homeReducer';

function mapStateToProps(state) : HomeState {
  // console.log('homeContainer mapStateToProps ', state);
  return ({
    ...state.home
  });
}

function mapDispatchToProps(dispatch) {
  // console.log("homeContainer mapDispatchToProps actions = ", SidebarActions);
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
