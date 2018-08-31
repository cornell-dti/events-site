import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./redux/reducers";
import Main from "./Main";
import {BrowserRouter} from "react-router-dom";

export default class App extends Component
{
	render()
	{
		return (
			<Provider store={createStore(reducers)}>
				<BrowserRouter>
					<React.Fragment>
						<CssBaseline />
						<Main />
					</React.Fragment>
				</BrowserRouter>
			</Provider>
		);
	}
}
