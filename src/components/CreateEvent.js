import React, {Component} from 'react';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import TextField from "@material-ui/core/TextField/TextField";
import {withStyles} from "@material-ui/core";
import ImageUploader from "./ImageUploader";

class CreateEvent extends Component
{
	state = {image: null, name: "", location: "",
		from: this.stringFromDate(this.defaultStartTime()),
		to: this.stringFromDate(this.defaultEndTime()), description: "", tags: []};

	//tomorrow, same hour, 0 minutes
	defaultStartTime()
	{
		let now = new Date();
		now.setDate(now.getDate() + 1);
		now.setMinutes(0);
		return now;
	}
	//start time + 1 hour
	defaultEndTime()
	{
		let start = this.defaultStartTime();
		start.setHours(start.getHours() + 1);
		return start;
	}
	stringFromDate(date)
	{
		return date.toISOString().slice(0, 16);
	}
	render()
	{
		const {classes} = this.props;
		return (
			<Dialog open={this.props.open} scroll={"body"}>
				<DialogTitle>Create an Event</DialogTitle>
				<DialogContent className={classes.content}>
					<ImageUploader onImageChange={image => this.setState({image})} />
					<TextField
						label="Event name"
						value={this.state.name}
						onChange={e => this.setState({name: e.target.value})}
						margin={"normal"}/>
					<TextField
						label="Location"
						value={this.state.location}
						onChange={e => this.setState({location: e.target.value})}
						margin={"normal"} />
					<TextField
						label="From"
						value={this.state.from}
						onChange={e => this.setState({from: e.target.value})}
						type={"datetime-local"}
						margin={"normal"}
						InputLabelProps={{shrink: true}}/>
					<TextField
						label="To"
						value={this.state.to}
						onChange={e => this.setState({to: e.target.value})}
						type={"datetime-local"}
						margin={"normal"}
						InputLabelProps={{shrink: true}}/>
					<TextField
						label="Description"
						value={this.state.description}
						onChange={e => this.setState({description: e.target.value})}
						multiline={true}
						margin={"normal"} />
				</DialogContent>
				<DialogActions>
					<Button onClick={this.props.onCancel} color="secondary">
						Cancel
					</Button>
					<Button onClick={this.props.onPublish} color="primary">
						Publish Event
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

const styles = (theme) => ({
	content: {
		display: 'flex',
		flexDirection: 'column'
	}
});

export default withStyles(styles)(CreateEvent);