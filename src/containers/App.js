import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../storage/index';

import AppNew from './AppNew'

// Styles
import styles from './App.scss'


// Store
// const myStore = createStore(rootReducer)

function configureStore(initialState) {
  const myStore = createStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../storage', () => {
      const nextRootReducer = require('../storage/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return myStore;
}

export default class App extends Component {
	render() {
		return (
			<Provider store={configureStore()} className={styles.app}>
				<AppNew />
			</Provider>
		)
	}
}
