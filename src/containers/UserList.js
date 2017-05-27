/* eslint-disable spaced-comment */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
	createListItems() {
		return this.props.users.map(user => (
			<li key={user.id}>{user.first} {user.last}</li>
      ));
	}
	render() {
		return (
			<ul>
				{this.createListItems()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.users,
	};
}
function hello(name) {
	const foo = 123;
	return foo + name;
}
hello();
export default connect(mapStateToProps)(UserList);
