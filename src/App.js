import React, { Component, Fragment } from 'react';
import America from './America';
import Germany from './Germany';
import './App.css';

export default class extends Component {
	render() {
		return (
			<Fragment>
				<ul className="layout">
					<li>
						<America />
					</li>
					<li>
						<Germany />
					</li>
				</ul>
			</Fragment>
		);
	}
}
