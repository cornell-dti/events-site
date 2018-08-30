import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import {withStyles} from "@material-ui/core";
import Onboarding from "./components/Onboarding";

class CreateOrg extends Component
{
	state = {name: "", email: "", password: "", confirmPassword: ""};

	confirmPasswordError()
	{
		return this.state.password !== this.state.confirmPassword;
	}
	render()
	{
		const {classes} = this.props;
		return (
			<Onboarding title={"Create an Organization Account"} body={""} button={"Continue"}>
				<TextField
					required
					id="name"
					label="Organization name"
					className={classes.textField}
					value={this.state.name}
					onChange={e => this.setState({name: e.target.value})}
					margin={"normal"} />
				<TextField
					required
					id="email"
					label="Organization email"
					className={classes.textField}
					value={this.state.email}
					onChange={e => this.setState({email: e.target.value})}
					margin={"normal"} />
				<TextField
					required
					id="password"
					label="Password"
					className={classes.textField}
					value={this.state.password}
					onChange={e => this.setState({password: e.target.value})}
					margin={"normal"}
					type={"password"}/>
				<TextField
					required
					id="confirmPassword"
					label="Confirm password"
					className={classes.textField}
					value={this.state.confirmPassword}
					onChange={e => this.setState({confirmPassword: e.target.value})}
					margin={"normal"}
					type={"password"}
					error={this.confirmPasswordError()}
					helperText={this.confirmPasswordError() ? "Passwords do not match" : ""}/>
			</Onboarding>
		);
	}
}

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	button: {

	},
	textField: {
		width: theme.spacing.unit * 50,
		margin: theme.spacing.unit * 3
	}
});

export default withStyles(styles)(CreateOrg);
