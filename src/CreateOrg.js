import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {withStyles} from "@material-ui/core";

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
			<div className={classes.root}>
				<Typography variant={"title"}>
					Create an organization account
				</Typography>
				<TextField
					id="name"
					label="Organization name"
					className={classes.textField}
					value={this.state.name}
					onChange={e => this.setState({name: e.target.value})}
					margin={"normal"} />
				<TextField
					id="name"
					label="Organization email"
					className={classes.textField}
					value={this.state.email}
					onChange={e => this.setState({email: e.target.value})}
					margin={"normal"} />
				<TextField
					id="name"
					label="Password"
					className={classes.textField}
					value={this.state.password}
					onChange={e => this.setState({password: e.target.value})}
					margin={"normal"}
					type={"password"}/>
				<TextField
					id="name"
					label="Confirm password"
					className={classes.textField}
					value={this.state.confirmPassword}
					onChange={e => this.setState({confirmPassword: e.target.value})}
					margin={"normal"}
					type={"password"}
					error={this.confirmPasswordError()}
					helperText={this.confirmPasswordError() ? "Passwords do not match" : ""}/>
				<Button variant={"outlined"} color={"primary"} className={classes.button}>
					Continue
				</Button>
			</div>
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
