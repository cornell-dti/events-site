import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import {withStyles} from "@material-ui/core";
import {Route, withRouter} from "react-router-dom";
import routes from './routes';
import LinkColorless from "./components/LinkColorless";

class Main extends Component
{
	getNavBar(classes)
	{
		switch (this.props.location.pathname)
		{
			case "/":
				return (
					<React.Fragment>
						<Typography variant={"title"} color={"inherit"}>
							Are you an organization?
						</Typography>
						<LinkColorless to={routes.myEvents.route}>
							<Button color={"primary"} className={classes.button}>
								Log in
							</Button>
						</LinkColorless>
						<LinkColorless to={routes.createOrg.route}>
							<Button variant={"outlined"} color={"primary"}
							        className={classes.button}>
								Sign up
							</Button>
						</LinkColorless>
					</React.Fragment>
				);
			case routes.myEvents.route:
			case routes.profile.route:
				return (
					<React.Fragment>
						<LinkColorless to={routes.profile.route}>
							<Button color={"primary"} className={classes.button}>
								Profile
							</Button>
						</LinkColorless>
						<LinkColorless to={routes.myEvents.route}>
							<Button color={"primary"} className={classes.button}>
								My Events
							</Button>
						</LinkColorless>
						<LinkColorless to={"/"}>
							<Button color={"primary"} className={classes.button}>
								Log Out
							</Button>
						</LinkColorless>
					</React.Fragment>
				);
			default:
				return null;
		}
	}

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
						{this.getNavBar(classes)}
					</Toolbar>
				</AppBar>
				<div className={classes.appBarSpace}/>
				{Object.values(routes).map(obj => <Route key={obj.route} path={obj.route}
				                                         component={obj.component}/>)}
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
	appBarSpace: theme.mixins.toolbar,
	links: {
		textDecoration: 'none'
	}
});

export default withStyles(styles)(withRouter(Main));