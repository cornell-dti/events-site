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
import {connect} from "react-redux";
import {ADD_TAG} from "./redux/tags";

class SelectTags extends Component
{
	state = {selectedTags: [], newTag: ""};

	onTagClick(tag)
	{
		//keep in mind that array mutation is not allowed for State
		if (this.state.selectedTags.includes(tag))
			this.setState({selectedTags: this.state.selectedTags.filter(t => t !== tag)});
		else
			this.setState({selectedTags: [...this.state.selectedTags, tag]});
	}
	onTextFieldKeyDown(e)
	{
		if (e.key !== "Enter")
			return;
		if (this.state.newTag === '')
			return;
		this.props.addTag(this.state.newTag);
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
					{[...this.props.tags].map(tag => (
						<GridListTile key={tag}>
							<Button color={"primary"}
							        variant={this.state.selectedTags.includes(tag) ? "contained" : "outlined"}
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

function mapStateToProps(state)
{
	return {
		tags: state.tags.tags
	};
}
function mapDispatchToProps(dispatch)
{
	return {
		addTag: (tag) => dispatch({type: ADD_TAG, tag})
	}
}

SelectTags = connect(mapStateToProps, mapDispatchToProps)(SelectTags);
export default withStyles(styles)(SelectTags);