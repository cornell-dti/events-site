import React, {Component} from 'react';
import logo from './logo.svg';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button/Button";

class App extends Component
{
	render()
	{
		const {classes} = this.props;
		return (
			<React.Fragment>
				<CssBaseline />
				<div className={classes.root}>
					<AppBar color={"default"}>
						<Toolbar>
							<Typography variant={"title"} color={"inherit"} className={classes.title}>
								Events
							</Typography>
							<Typography variant={"title"} color={"inherit"}>
								Are you an organization?
							</Typography>
							<Button color={"primary"} className={classes.button}>
								Log in
							</Button>
							<Button variant={"outlined"} color={"primary"} className={classes.button}>
								Sign up
							</Button>
						</Toolbar>
					</AppBar>
				</div>
			</React.Fragment>
		);
	}
}

const styles = {
	root: {
		flexGrow: 1
	},
	title: {
		flexGrow: 1
	},
	button: {

	}
};

export default withStyles(styles)(App);
