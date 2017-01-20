import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import TopNav from '../Components/TopNav'

class Root extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={TopNav} />
			</Router>
		)
	}
}

export default Root