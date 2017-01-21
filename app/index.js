import React from 'react'
import { render } from 'react-dom'
import Root from './Containers/Root'
require('./css/master.css')

render(
	<Root />,
	document.getElementById('app')
)