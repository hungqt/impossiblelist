import React from 'react';
import { Col, Panel } from 'react-bootstrap';

const Item = ({content}) => (
  <Col xs={4}>
    <Panel>
      <h2> Thing to do </h2>
      <p> Some details about the thing that needs to be done. </p>
    </Panel>
  </Col>
);

export default Item;
