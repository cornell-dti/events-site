import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import {withStyles} from "@material-ui/core";
import {Link, Route} from "react-router-dom";
import routes from './routes';

class Main extends Component
{
	render()
	{
		const {classes} = this.props;
		return (
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
							<Link to={routes.createOrg.route} style={{textDecoration: 'none'}}>
								Sign up
							</Link>
						</Button>
					</Toolbar>
				</AppBar>
				<div className={classes.appBarSpace} />
				{Object.values(routes).map(obj => <Route key={obj.route} path={obj.route} component={obj.component}/>)}
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
	title: {
		flexGrow: 1
	},
	appBarSpace: theme.mixins.toolbar
});

export default withStyles(styles)(Main);