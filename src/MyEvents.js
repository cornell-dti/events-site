import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import CreateEvent from "./components/CreateEvent";
import EventCard from "./components/EventCard";
import GridListTile from "@material-ui/core/GridListTile/GridListTile";
import GridList from "@material-ui/core/GridList/GridList";

const DEMO_EVENTS = [{
	pk: 42,
	name: "Night at the Johnson",
	description: "Experience the magic of an after-hours event at Cornell's wonderful Johnson Museum with art, music, food, desserts, and drinks. Dress up or dress down and get ready for a fun time!",
	location: "Eddy St, Ithaca NY 14850",
	start_date: "2018-01-21",
	end_date: "2018-01-21",
	start_time: "19:30:00",
	end_time: "22:00:00",
	num_attendees: 39,
	is_public: true,
	organizer: 3,
	event_tags: [1,2]
}];

class MyEvents extends Component
{
	state = {createEvent: false};

	onCancelCreate()
	{
		this.setState({createEvent: false});
	}
	onPublishEvent()
	{
		this.setState({createEvent: false});
	}
	render()
	{
		const {classes} = this.props;
		return (
			<div>
				<Button variant={"fab"} color={"primary"} className={classes.fab} onClick={() => this.setState({createEvent: true})}>
					<Icon>add</Icon>
				</Button>
				<GridList className={classes.cardContainer} cellHeight={"auto"} cols={3}>
					{DEMO_EVENTS.map(event => (
						<GridListTile key={`${event.pk}`}>
							<EventCard name={event.name} location={event.location} />
						</GridListTile>
					))}
				</GridList>
				<CreateEvent open={this.state.createEvent}
				             onCancel={this.onCancelCreate.bind(this)}
				             onPublish={this.onPublishEvent.bind(this)} />
			</div>
		);
	}
}

const styles = (theme) => ({
	cardContainer: {
		width: '100vw'
	},
	fab: {
		position: 'absolute',
		marginTop: theme.spacing.unit * 4,
		right: theme.spacing.unit * 4
	}
});
export default withStyles(styles)(MyEvents);
