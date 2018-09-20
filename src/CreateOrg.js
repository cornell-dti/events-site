import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField/TextField";
import {withStyles} from "@material-ui/core";
import Onboarding from "./components/Onboarding";
import routes from './routes';
import connect from "react-redux/es/connect/connect";
import {SET_ORG_EMAIL, SET_ORG_NAME, SET_PASSWORD} from "./redux/user";

class CreateOrg extends Component
{
	state = {confirmPassword: ""};

	confirmPasswordError()
	{
		return this.props.password !== this.state.confirmPassword;
	}
	canContinue()
	{
		return this.props.name !== undefined && this.props.name !== "" &&
			this.props.email !== undefined && this.props.email !== "" &&
			this.props.password !== undefined && this.props.password !== "" &&
			!this.confirmPasswordError();
	}
	render()
	{
		const {classes} = this.props;
		return (
			<Onboarding title={"Create an Organization Account"} button={"Continue"} link={routes.verifyCornellStatus.route} canClick={this.canContinue()}>
				<TextField
					label="Organization name"
					className={classes.textField}
					value={this.props.name}
					onChange={e => this.props.setName(e.target.value)}
					InputLabelProps={{shrink: true}}
					margin={"normal"} />
				<TextField
					label="Organization email"
					className={classes.textField}
					value={this.props.email}
					onChange={e => this.props.setEmail(e.target.value)}
					InputLabelProps={{shrink: true}}
					margin={"normal"} />
				<TextField
					label="Password"
					className={classes.textField}
					value={this.props.password}
					onChange={e => this.props.setPassword(e.target.value)}
					InputLabelProps={{shrink: true}}
					margin={"normal"}
					type={"password"}/>
				<TextField
					label="Confirm password"
					className={classes.textField}
					value={this.state.confirmPassword}
					onChange={e => this.setState({confirmPassword: e.target.value})}
					InputLabelProps={{shrink: true}}
					margin={"normal"}
					type={"password"}
					error={this.confirmPasswordError()}
					helperText={this.confirmPasswordError() ? "Passwords do not match" : ""}/>
			</Onboarding>
		);
	}
}

CreateOrg.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired
};

const styles = (theme) => ({
	button: {

	},
	textField: {
		width: theme.spacing.unit * 50,
		margin: theme.spacing.unit * 3
	}
});


function mapStateToProps(state)
{
	return {
		name: state.user.orgName,
		email: state.user.orgEmail,
		password: state.user.password
	};
}
function mapDispatchToProps(dispatch)
{
	return {
		setName: (name) => dispatch({type: SET_ORG_NAME, name}),
		setEmail: (email) => dispatch({type: SET_ORG_EMAIL, email}),
		setPassword: (password) => dispatch({type: SET_PASSWORD, password})
	}
}

CreateOrg = connect(mapStateToProps, mapDispatchToProps)(CreateOrg);
export default withStyles(styles)(CreateOrg);
