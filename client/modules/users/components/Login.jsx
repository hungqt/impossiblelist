import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Panel, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

class Login extends React.Component {
	render() {
		const {error} = this.props;
		return (
			<Col xs={12} sm={6} smOffset={3}>
				<Panel>
					<h1>Login</h1>
					{error ? <p style={{color: 'red'}}>{error}</p> : null}
					<form>
						<FormGroup>
							<FormControl ref="email" type="email" placeholder="Email" />
							<FormControl ref="password" type="password" placeholder="Password" />
							<Button onClick={this.login.bind(this)} bsStyle="primary" type="submit" >Login</Button>
						</FormGroup>
					</form>
				</Panel>
			</Col>
		)
	}

	login(e) {
		e.preventDefault();
		const {loginUser} = this.props;
		const {email, password} = this.refs;
		loginUser(ReactDOM.findDOMNode(email).value, ReactDOM.findDOMNode(password).value);
		ReactDOM.findDOMNode(email).value = '';
		ReactDOM.findDOMNode(password).value = '';
	}
}

export default Login;
