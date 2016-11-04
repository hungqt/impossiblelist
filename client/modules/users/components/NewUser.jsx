import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Panel, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

class NewUser extends React.Component {
	render() {
		const {error} = this.props;
		return (
			<Col xs={12} sm={6} smOffset={3}>
				<Panel>
					<h1>Register</h1>
					{error ? <p style={{color: 'red'}}>{error}</p> : null}
					<form>
						<FormGroup>
							<FormControl ref="email" type="email" placeholder="Email" />
							<FormControl ref="password" type="password" placeholder="Password" />
							<Button onClick={this.createUser.bind(this)} bsStyle="primary" type="submit"> Sign Up</Button>
						</FormGroup>
					</form>
				</Panel>
			</Col>
		)
	}

	createUser(e) {
		e.preventDefault();
		const {create} = this.props;
		const {email, password} = this.refs;
		create(ReactDOM.findDOMNode(email).value, ReactDOM.findDOMNode(password).value);
		ReactDOM.findDOMNode(email).value = '';
		ReactDOM.findDOMNode(password).value = '';
	}
}

export default NewUser;
