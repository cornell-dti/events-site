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
						<Typography gutterBottom variant="headline" component="h2">
							{this.props.name}
						</Typography>
						<Typography component="p">
							{this.props.location}
						</Typography>
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
		paddingTop: '50%'
	},
	actionArea: {
		width: '100%'
	}
});

export default withStyles(styles)(EventCard);