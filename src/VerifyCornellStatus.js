import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Onboarding from "./components/Onboarding";
import TextField from "@material-ui/core/TextField/TextField";

class VerifyCornellStatus extends Component
{
	state = {name: "", netid: ""};

	render()
	{
		const {classes} = this.props;
		return (
			<Onboarding title={"VERIFY YOUR CORNELL STATUS"} body={"To keep events and the community Cornell-specific, you must be a Cornell student to create an organization account."} button={"I am a Cornell student"}>
				<TextField
					required
					id="name"
					label="Name"
					className={classes.textField}
					value={this.state.name}
					onChange={e => this.setState({name: e.target.value})}
					margin={"normal"} />
				<TextField
					required
					id="netid"
					label="Cornell NetID"
					className={classes.textField}
					value={this.state.netid}
					onChange={e => this.setState({netid: e.target.value})}
					margin={"normal"} />
			</Onboarding>
		)
	}
}

const styles = (theme) => ({
	textField: {
		width: theme.spacing.unit * 50,
		margin: theme.spacing.unit * 3
	}
});

export default withStyles(styles)(VerifyCornellStatus);