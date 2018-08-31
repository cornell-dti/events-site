import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import CreateEvent from "./components/CreateEvent";

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
				<CreateEvent open={this.state.createEvent}
				             onCancel={this.onCancelCreate.bind(this)}
				             onPublish={this.onPublishEvent.bind(this)} />
			</div>
		);
	}
}

const styles = (theme) => ({
	fab: {
		position: 'absolute',
		marginTop: theme.spacing.unit * 4,
		right: theme.spacing.unit * 4
	}
});
export default withStyles(styles)(MyEvents);
