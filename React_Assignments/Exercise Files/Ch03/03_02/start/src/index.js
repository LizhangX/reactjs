import React from 'react';
import { render } from 'react-dom';
import { GymDayCount } from './components/GymDayCount';

window.React = React;

render(
	<GymDayCount 
				total={50}
				rain={20}
				busy={10}
				goal={100}/>,
	document.getElementById('react-container')
)