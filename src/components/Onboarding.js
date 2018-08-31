import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

class Onboarding extends Component
{
	render()
	{
		const {classes} = this.props;
		return (
			<div className={classes.root}>
				<Typography variant={"headline"} className={classes.title}>
					{this.props.title}
				</Typography>
				<Typography variant={"title"} className={classes.spaced} align={"center"}>
					{this.props.body}
				</Typography>
				{this.props.children}
				{this.props.button !== undefined
					? <Button color={"primary"} variant={"contained"} className={classes.spaced} >
						{this.props.button}
					</Button>
					: null}
			</div>
		);
	}

}

const styles = (theme) => ({
	root: {
		height: '80vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		margin: theme.spacing.unit * 2
	},
	title: {
		fontWeight: 700,
		extend: 'spaced'
	},
	spaced: {
		margin: theme.spacing.unit * 2
	}
});
export default withStyles(styles)(Onboarding);