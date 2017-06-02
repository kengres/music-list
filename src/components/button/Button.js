import React, { Component } from 'react';
import css from './Button.scss';

export default class Button extends Component {
	
	render() {
		return (
			<button className={this.props.color}>{this.props.content}</button>
		);
	}
}
