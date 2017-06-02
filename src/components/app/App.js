import React, { Component } from 'react';

import css from './App.scss';

import Button from '../button/Button';


export default class App extends Component {
	render() {
		return (
			<div className="myDiv">
				<h1>Hello, world!</h1>
				<p>Of course it needs to be pink</p>
				<p><Button color="btn-info" content="Info" /></p>
				<p><Button color="btn-warning" content="Warning" /></p>
				<p><Button color="btn-danger" content="Danger" /></p>
			</div>
		);
	}
}
