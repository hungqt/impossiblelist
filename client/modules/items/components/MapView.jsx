import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import Map, {GoogleApiWrapper} from 'google-maps-react';


export class MapView extends React.Component {
	render(){
		return(
			<div>
			  <Row>
			  	<Col xs={12}>
			  		<h2> Map To Be Implemented</h2>
			  	</Col>
			  </Row>
				<Map google={this.props.google} zoom={14} >

				</Map>
			</div>
		)
	}
}

export default GoogleApiWrapper({
	//apiKey should load from a global variable, but i didn't manage to make it work.
	apiKey: 'AIzaSyCTDaKwjj1RxHX-hi8UjtqJbyHCerKPSRg'
})(MapView);
