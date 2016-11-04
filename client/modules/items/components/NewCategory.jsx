import React from 'react';
import ReactDOM from 'react-dom'
import { Col, Panel, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

class NewCategory extends React.Component {
  render() {
    const{error} = this.props;
    return(
      <Col xs={12} sm={6} smOffset={13}>
        <Panel>
          <h1> Add Category </h1>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <FormGroup>
              <FormControl ref="name" type="text" placeholder="Name" />
              <Button onClick={this.createCategory.bind(this)} bsStyle="primary" type="submit"> Add Category </Button>
            </FormGroup>
          </form>
        </Panel>
      </Col>
    )
  }

  createCategory(e) {
    e.preventDefault();
    const {create} = this.props;
    const {name} = this.refs;
    create(ReactDOM.findDOMNode(name).value);
    ReactDOM.findDOMNode(name).value = '';
  }
}

export default NewCategory;
