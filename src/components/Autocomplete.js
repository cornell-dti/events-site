import React, {Component} from 'react';
import Select from "react-select";

export default class Autocomplete extends Component
{
	state = {selected: []};

	render()
	{
		return (
			<Select
				value={this.state.selected}
				options={this.props.data}
				isMulti
			/>
		);
	}
}