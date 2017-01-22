import React, { Component } from 'react'
import { Link } from 'react-router'

class TopNav extends Component {
	render() {
		return (
			<nav className='navbar navbar-inverse'>
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
						  <li className='active'><Link to='/'>Home</Link></li>
						  <li><Link to='/profile'>Profile</Link></li>
						  <li><Link to='/messages'>Messages</Link></li>
						  <li><Link to='/resume'>Resume</Link></li>
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