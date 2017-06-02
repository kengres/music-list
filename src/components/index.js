import React, { Component } from 'react';
import App from './app/App';
import Button from './button/Button';

export default class Index extends Component {
	render() {
		return (
			<div>
				<App />
				<Button color="btn-info" />
				<Button color="btn-warning" />
				<Button color="btn-danger" />
			</div>
		);
	}
}
