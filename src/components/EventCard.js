import React, {Component} from 'react';
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import {withStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";

class EventCard extends Component
{
	render()
	{
		const {classes} = this.props;
		return (
			<Card className={classes.root} raised>
				<CardActionArea className={classes.actionArea}>
					<CardMedia
						className={classes.image}
						image="" />
					<CardContent>
						<Typography variant="headline" className={classes.title}>
							{this.props.name}
						</Typography>
						<Typography variant={"body1"} className={classes.location}>
							{this.props.location}
						</Typography>
						<div className={classes.horizLayout}>
							<div className={classes.vertLayout}>
								<Typography variant={"body1"} className={classes.bold}>
									May
								</Typography>
								<Typography variant={"body1"} className={classes.num}>
									99
								</Typography>
							</div>
							<div className={classes.vertLayout}>
								<Typography variant={"body1"} className={classes.bold}>
									Starts
								</Typography>
								<Typography variant={"body1"} className={classes.num}>
									10:08 PM
								</Typography>
							</div>
							<div className={classes.vertLayout}>
								<Typography variant={"body1"} className={classes.bold}>
									Going
								</Typography>
								<Typography variant={"body1"} className={classes.num}>
									999
								</Typography>
							</div>
						</div>
					</CardContent>
				</CardActionArea>
			</Card>
		);
	}
}

const styles = (theme) => ({
	root: {
		flex: 1
	},
	image: {
		width: '100%',
		paddingTop: '50%' //2:1 ratio
	},
	actionArea: {
		width: '100%'
	},
	horizLayout: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'space-around',
		marginTop: theme.spacing.unit * 2
	},
	vertLayout: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	title: {
		fontWeight: 500,
		fontSize: 25
	},
	location: {
		fontWeight: 400,
		fontSize: 20
	},
	bold: {
		fontWeight: 500,
		fontSize: 20
	},
	num: {
		fontWeight: 400,
		fontSize: 25
	}
});

export default withStyles(styles)(EventCard);