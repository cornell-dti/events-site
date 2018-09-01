import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from "@material-ui/core";

class Logo extends Component
{
	render()
	{
		const {classes} = this.props;
		return (
			<Typography className={classes.title} style={{fontSize: this.props.fontSize}}>
				cue
			</Typography>
		);
	}
}

const styles = (theme) => ({
	title: {
		fontWeight: 700,
		lineHeight: 1,
		color: '#B8598E'
	}
});

export default withStyles(styles)(Logo);