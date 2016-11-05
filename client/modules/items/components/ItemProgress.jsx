import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ItemProgress = ({percentage}) => (

  //Går fra å være label="%(percent)s%"
  //til: label={`${percent}%`}
  //Ble patchet av react-bootstrap
  <ProgressBar now={percentage} label={`${percentage}%`}></ProgressBar>
);

export default ItemProgress;
