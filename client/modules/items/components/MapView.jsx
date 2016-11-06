import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import {searchNearby} from './utils/googleApiHelpers';

export class MapView extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			places: [],
			pagination: null
		}
	}

	onReady(mapProps, map){
		//When the map is ready and mounted, run this
		const {google} = this.props;
		const opts = {
			location: map.center,
			radius: '1000',
			types: ['restaurant']
		}
		searchNearby(google, map, opts).then((results, pagination) => {
			//We got some results and a pagination object
			this.setState({
				places: results,
				pagination
			})
		}).catch((status, result) => {
			//There was an error
		})
	}

	render(){
		return(
			<div>
			  <Row>
			  	<Col xs={12}>
			  		<h2> SearchBar To Be Implemented</h2>
			  	</Col>
			  </Row>
				<Row className="show-grid">
						<Col xs={4}>
							{/* returns a list of all the places from the searchNearby() method */}
							{this.state.places.map(place => {
								return (<div key={place.id}> {place.name} </div>)
							})}
						</Col>
						<Col xs={4}>
							{/* Should not be styled this way DELETE LATER */}
							<Map google={this.props.google} onReady={this.onReady.bind(this)} style={{height: '500px', width: '500px'}} >

							</Map>
						</Col>
				</Row>
			</div>
		)
	}
}

export default GoogleApiWrapper({
	//Best practice: apiKey should load from a global variable, but i didn't manage to make it work.
	apiKey: 'AIzaSyCTDaKwjj1RxHX-hi8UjtqJbyHCerKPSRg'
})(MapView);
