import MapView from '../components/MapView.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(MapView);
