import React, {Component} from 'react';
import CreatableSelect from "react-select/lib/Creatable";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import TextField from "@material-ui/core/TextField/TextField";
import {withStyles} from "@material-ui/core";
import Chip from "@material-ui/core/Chip/Chip";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";

class Autocomplete extends Component
{
	state = {selected: null};

	onSelect(val)
	{
		this.setState({selected: val});
		this.props.onUpdate(val);
	}

	render()
	{
		const {classes} = this.props;
		return (
			<CreatableSelect
				classes={classes}
				value={this.state.selected}
				onChange={this.onSelect.bind(this)}
				options={this.props.data}
				textFieldProps={{
					label: this.props.label,
					InputLabelProps: {shrink: true}
				}}
				placeholder={this.props.placeholder}
				components={components}
				isMulti
			/>
		);
	}
}

function inputComponent({ inputRef, ...props }) {
	return <div ref={inputRef} {...props} />;
}

function Control(props) {
	return (
		<TextField
			fullWidth
			InputProps={{
				inputComponent,
				inputProps: {
					className: props.selectProps.classes.input,
					inputRef: props.innerRef,
					children: props.children,
					...props.innerProps,
				},
			}}
			{...props.selectProps.textFieldProps}
		/>
	);
}

function Option(props) {
	return (
		<MenuItem
			buttonRef={props.innerRef}
			selected={props.isFocused}
			component="div"
			style={{fontWeight: props.isSelected ? 500 : 400}}
			{...props.innerProps}>
			{props.children}
		</MenuItem>
	);
}

function Placeholder(props) {
	return (
		<Typography
			color="textSecondary"
			className={props.selectProps.classes.placeholder}
			{...props.innerProps}>
			{props.children}
		</Typography>
	);
}

function ValueContainer(props) {
	return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
	return (
		<Chip
			tabIndex={-1}
			label={props.children}
			className={props.selectProps.classes.chip}
			onDelete={event => {
				props.removeProps.onClick();
				props.removeProps.onMouseDown(event);
			}}
		/>
	);
}

function Menu(props) {
	return (
		<Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
			{props.children}
		</Paper>
	);
}

const components = {
	Option,
	Control,
	Placeholder,
	MultiValue,
	ValueContainer,
	Menu
};

const styles = (theme) => ({
	input: {
		display: 'flex',
		padding: 0
	},
	valueContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		flex: 1,
		alignItems: 'center'
	},
	chip: {
		margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
	},
	placeholder: {
		position: 'absolute',
		left: 2,
		fontSize: 16
	},
	paper: {
		position: 'absolute',
		zIndex: 1,
		marginTop: theme.spacing.unit,
		left: 0,
		right: 0
	}
});

export default withStyles(styles, {withTheme: true})(Autocomplete);