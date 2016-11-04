import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Panel, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';

class EditItem extends React.Component{
  render() {
    const {item} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <a href="/"><Glyphicon glyph="chevron-left"></Glyphicon> Back to items </a>
          <h1>{item ? 'Edit' : 'Add'}</h1>
          <form>
            <FormGroup>
              <FormControl ref="name" type="text" placeholder="Name" defaultValue={item ? item.name : ''} />
              <FormControl ref="description" type="textarea" placeholder="Description" defaultValue={item ? item.description : ''} />
              <DateTimeField />
              <Button onClick={this.createItem.bind(this)} bsStyle="primary" type="submit"> Save Item </Button>
            </FormGroup>
          </form>
        </Panel>
      </Col>
    )
  }

  createItem(e){
    e.preventDefault();
    const {create} = this.props;
    const {name, description} = this.refs;
    // getValue() is deprecated, to get name.getValue() in the new way, use ReactDOM.findDOMNode(ref_id).value
    create(ReactDOM.findDOMNode(name).value, ReactDOM.findDOMNode(description).value);
    ReactDOM.findDOMNode(name).value = '';
    ReactDOM.findDOMNode(description).value = '';
  }
}

export default EditItem;
