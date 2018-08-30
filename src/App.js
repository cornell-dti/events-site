import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button/Button";
import CreateOrg from "./CreateOrg";
import SelectTags from "./SelectTags";
import VerifyCornellStatus from "./VerifyCornellStatus";
import VerifyOrg from "./VerifyOrg";

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
					<div className={classes.appBarSpace} />
					<VerifyOrg />
				</div>
			</React.Fragment>
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
	title: {
		flexGrow: 1
	},
	appBarSpace: theme.mixins.toolbar
});

export default withStyles(styles)(App);
