import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ItemProgress = ({content}) => (

  //Går fra å være label="%(percent)s%"
  //til: label={`${percent}%`}
  //Ble patchet av react-bootstrap
  <ProgressBar now={70} label="%(percent)s%"></ProgressBar>
);

export default ItemProgress;
