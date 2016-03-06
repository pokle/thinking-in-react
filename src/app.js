// This is the main entry point as compiled by scripts/*

import React from 'react'
import ReactDOM  from 'react-dom'
import {hello} from './logic'
import {Container} from './container'

ReactDOM.render(
	<Container>
		<h1>{hello('world')} of React!</h1>
	</Container>,
  	document.getElementById('app')
);

