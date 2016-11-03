import React from 'react';
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
							<Button onClick={this.login.bind(this)} bsStyle="primary" type="submit" value="Login"/>
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
		loginUser(email.getValue(), password.getValue());
		email.getFormControlDOMNode().value = '';
		password.getFormControlDOMNode().value = '';
	}
}

export default Login;
