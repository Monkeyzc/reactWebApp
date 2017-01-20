import React, { Component } from 'react'

class TopNav extends Component {
	render() {
		return (
			<nav className='navbar navbar-inverse navbar-fixed-top'>
				<div className='container-fluid'>
					<div className='navbar-header'>
						<button className='navbar-toggle' type='button' data-toggle='collapse' data-target="#navbar">
					      <span className='sr-only'>Toggle navigation</span>
					      <span className='icon-bar' />
					      <span className='icon-bar' />
					      <span className='icon-bar' />
					    </button>
						<a className='navbar-brand' href='#'>Zhao Fei</a>
					</div>
					<div id='navbar' className='navbar-collapse collapse'>
						<ul className='nav navbar-nav'>
						  <li className='active'><a href='#'>Home</a></li>
						  <li><a href='#'>Profile</a></li>
						  <li><a href='#'>Messages</a></li>
						  <li className='dropdown'>
						    <a className='dropdown-toggle' data-toggle='dropdown'>
						      Dropdown <span className='caret'></span>
						    </a>
						    <ul className='dropdown-menu' role='menu'>
						      <li><a>Action1</a></li>
						      <li><a>Action2</a></li>
						      <li><a>Action3</a></li>
						    </ul>
						  </li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default TopNav