// @flow         		-*- mode: rjsx; js-indent-level: 2; -*-

import { createBrowserHistory } from 'history'
import { configureStore } from 'redux-starter-kit'
import { install } from 'redux-loop';
import createRootReducer from './reducers'

export const history = createBrowserHistory()

const store = configureStore({
    reducer: createRootReducer(history),
    enhancers: [install()]
})

export default store
