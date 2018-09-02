import React, {Component} from 'react';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import TextField from "@material-ui/core/TextField/TextField";
import {withStyles} from "@material-ui/core";
import ImageUploader from "./ImageUploader";
import TagField from "./TagField";
import Autocomplete from "./Autocomplete";

class CreateEvent extends Component
{
	state = {image: null, name: "", room: "", location: "",
		from: this.stringFromDate(this.defaultStartTime()),
		to: this.stringFromDate(this.defaultEndTime()), description: "", tags: [],
		locationSuggestions: []};

	constructor(props)
	{
		super(props);
		const {google} = window;
		const mapCenter = new google.maps.LatLng(-33.8617374,151.2021291);
		const map = new google.maps.Map(document.getElementById('map'), {
			center: mapCenter,
			zoom: 15
		});
		const service = new google.maps.places.PlacesService(map);
		var request = {
			query: 'Museum of Contemporary Art Australia',
			fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
		};
		service.findPlaceFromQuery(request, (res) => console.log(`res: ${JSON.stringify(res)}`));
	}
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
	autocompleteLocation(input)
	{
		if (input.length < 3)
			return;
		//center at Day Hall, radius = 500 meters
		// const url = `https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=${input}&type=geocode&location=42.44701,-76.48327&radius=500&key=AIzaSyDiuJAmADGofmKXnGzwMj831gHS2b-u6eo`;
		// fetch(url)
		// 	.then(res => res.json())
		// 	.then(res => this.setState({locationSuggestions:
		// 			res.predictions.map(loc => ({name: loc.description, place_id: loc.place_id}))}))
		// 	.catch(err => console.log(`Maps autocomplete error: ${err}`))
	}
	render()
	{
		const {classes} = this.props;
		return (
			<Dialog open={this.props.open} scroll={"body"}>
				<DialogTitle>Create an Event</DialogTitle>
				<DialogContent className={classes.content}>
					<ImageUploader onImageChange={image => this.setState({image})}
					               shape={"rectangle"} />
					<TextField
						label="Event name"
						value={this.state.name}
						onChange={e => this.setState({name: e.target.value})}
						margin={"normal"}/>
					<TextField
						label="Room"
						value={this.state.room}
						placeholder={"Building + room to display (e.g. Gates G01)"}
						onChange={e => this.setState({room: e.target.value})}
						margin={"normal"} />
					<Autocomplete
						label={"Google Maps location"}
						value={this.state.selected}
						options={this.state.locationSuggestions.map(loc =>
							({value: loc.name, label: loc.name}))}
						onSelect={val => console.log(`select: ${val}`)}
						onChange={this.autocompleteLocation}
						placeholder={"Building to navigate to (e.g. Bill and Melinda Gates Hall)"}
						multiSelect={false}
						canCreate={false}/>
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
					<TagField onNewTags={(tags) => this.setState({tags: tags})} />
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