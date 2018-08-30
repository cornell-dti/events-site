import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Onboarding from "./components/Onboarding";
import TextField from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

class VerifyCornellStatus extends Component
{
	state = {facebookLink: "", website: ""};

	render()
	{
		const {classes} = this.props;
		return (
			<Onboarding title={"VERIFY YOUR ORGANIZATION"} body={"To make sure the events posted by organizations are accurate, only Cornell organizations can create an organization account.\nSelect a verification method below:"} button={"Done"}>
				<TextField
					id="facebook"
					label="Organization's Facebook Link"
					className={classes.textField}
					value={this.state.facebookLink}
					onChange={e => this.setState({facebookLink: e.target.value})}
					margin={"normal"} />
				<TextField
					id="website"
					label="Organization's Website"
					className={classes.textField}
					value={this.state.website}
					onChange={e => this.setState({website: e.target.value})}
					margin={"normal"} />
				<Typography variant={"title"}>
					Contact Us
				</Typography>
				<Typography variant={"subheading"}>
					Please send us an email to cue@gmail.com for an in-person meeting to verify your club.
				</Typography>
				<Button variant={"contained"} color={"secondary"}>
					Email Us
				</Button>
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