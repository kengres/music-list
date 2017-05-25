import React, { Component } from 'react'
import UserList from '../containers/UserList'



export default class AppNew extends Component {
	render() {
		return (
			<div>
				<h2>Users List: </h2>
				<UserList />
				<hr/>
				<h2>User details:</h2>
			</div>
		)
	}
}
