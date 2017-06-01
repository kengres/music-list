/* eslint-disable no-undef, linebreak-style */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Index from './components/';

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
    document.getElementById('root'),
  );
};

render(Index);

if (module.hot) {
	module.hot.accept('./components/', () => { render(Index); });
}
