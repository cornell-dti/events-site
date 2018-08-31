import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class LinkColorless extends Component
{
	render()
	{
		return (
			<Link {...this.props}
				style={{
					textDecoration: 'none'
				}}>
				{this.props.children}
			</Link>
		);
	}
}