/* eslint-disable no-undef, linebreak-style */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// import Index from './components/';
import App from './components/App';

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
	module.hot.accept('./components/App', () => { 
		render(App); 
	});
}
