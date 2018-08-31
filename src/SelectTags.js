import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import GridList from "@material-ui/core/GridList/GridList";
import GridListTile from "@material-ui/core/GridListTile/GridListTile";
import Button from "@material-ui/core/Button/Button";
import Onboarding from "./components/Onboarding";
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import routes from './routes';
import Icon from "@material-ui/core/Icon/Icon";

class SelectTags extends Component
{
	state = {tags: new Set(["Business", "Tech", "Greek Life", "Computer Science", "Music", "Parties", "Dance", "Sports", "Politics", "International", "Community Service"]), selectedTags: new Set(), newTag: ""};

	onTagClick(tag)
	{
		if (this.state.selectedTags.has(tag))
			this.state.selectedTags.delete(tag);
		else
			this.state.selectedTags.add(tag);
		this.setState({selectedTags: this.state.selectedTags}); //force update
	}
	onTextFieldKeyDown(e)
	{
		if (e.key !== "Enter")
			return;
		if (this.state.newTag === '')
			return;
		if (this.state.tags.has(this.state.newTag))
			return;
		this.state.tags.add(this.state.newTag);
		this.setState({tags: this.state.tags});
		this.onTagClick(this.state.newTag);
		this.setState({newTag: ""});
	}
	render()
	{
		const {classes} = this.props;
		return (
			<Onboarding title={"SELECT TAGS THAT DESCRIBE YOUR ORGANIZATION"} body={"Select at least 1 tag. This will help people discover your organization more quickly!"} button={"Continue"} link={routes.verifyCornellStatus.route}>
				<TextField
					id="addTag"
					label="New tag"
					className={classes.textField}
					value={this.state.newTag}
					onChange={e => this.setState({newTag: e.target.value})}
					margin={"normal"}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Icon>add</Icon>
							</InputAdornment>
						)
					}}
					onKeyPress={e => this.onTextFieldKeyDown(e)}/>
				<GridList cellHeight={"auto"} cols={3}>
					{[...this.state.tags].map(tag => (
						<GridListTile key={tag}>
							<Button color={"primary"}
							        variant={this.state.selectedTags.has(tag) ? "contained" : "outlined"}
							        onClick={() => this.onTagClick(tag)}>
								{tag}
							</Button>
						</GridListTile>
					))}
				</GridList>
			</Onboarding>
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
	headline: {
		fontWeight: 700
	}
});

export default withStyles(styles)(SelectTags);