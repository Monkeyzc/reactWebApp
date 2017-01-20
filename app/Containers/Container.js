import React, { Component } from 'react'
import TopNav from '../Components/TopNav'

export default class Container extends Component {
	render() {
		return (
			<div>
				<TopNav />
				<div className='container'>
					{this.props.children}
				</div>
			</div>
		)
	}
}