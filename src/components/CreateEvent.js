import React, {Component} from 'react';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";

export default class CreateEvent extends Component
{
	render()
	{
		return (
			<Dialog open={this.props.open}>
				<DialogTitle>Create an Event</DialogTitle>
				<DialogContent>

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