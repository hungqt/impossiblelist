import React from 'react';
import { Col, Panel, Input, ButtonInput } from 'react-bootstrap';

const EditItem = ({content}) => (
  <Col xs={12} sm={6} smOffset={3}>
    <Panel>
      <h1> Edit Item </h1>
      <form>
        <Input type="text" placeholder="Name" />
        <input type="textarea" placeholder="Description" />
        <buttonInput bsStyle="primary" type="submit" value="Save Item" />
      </form>
    </Panel>
  </Col>
);

export default EditItem;
