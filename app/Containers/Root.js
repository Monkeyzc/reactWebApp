import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Container from './Container'
import Home from './Home'
import Profile from './Profile'
import Messages from './Messages'

class Root extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={Container}>
					<IndexRoute component={Home} />
					<Route path='profile' component={Profile} />
					<Route path='messages' component={Messages} />
				</Route>
			</Router>
		)
	}
}

export default Root