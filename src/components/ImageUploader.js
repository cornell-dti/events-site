import React, {Component} from 'react';
import Button from "@material-ui/core/Button/Button";
import {withStyles} from "@material-ui/core";

class ImageUploader extends Component
{
	state = {hasImage: false};

	onFileChange(e)
	{
		const image = e.target.files[0];
		this.props.onImageChange(image);
		this.setState({hasImage: true});

		const reader = new FileReader();
		reader.onload = (ev) =>
			document.getElementById("imagePreview").style.backgroundImage = "url('" + ev.target.result + "')";
		reader.readAsDataURL(image);
	}
	onUploadClick()
	{
		document.getElementById("fileInput").click();
	}
	render()
	{
		const {classes} = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.hidden}>
					<input id={"fileInput"} type={"file"} onChange={this.onFileChange.bind(this)} accept={"image/*"} />
				</div>
				<Button className={classes.button} onClick={this.onUploadClick}>
					{this.state.hasImage ? "Change image" : "Upload image"}
				</Button>
				{this.state.hasImage
					? <div id={"imagePreview"} className={classes.imagePreview} />
					: null}
			</div>
		);
	}
}

const styles = (theme) => ({
	root: {
	},
	hidden: {
		height: 0,
		overflow: 'hidden'
	},
	button: {
		width: '100%'
	},
	imagePreview: {
		width: '100%',
		paddingTop: '50%', //2:1 ratio
		marginTop: theme.spacing.unit * 2,
		backgroundSize: 'cover'
	}
});

export default withStyles(styles)(ImageUploader);