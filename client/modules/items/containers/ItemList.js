import ItemList from '../components/ItemList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

//Composer fetcher data
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('items.list').ready()) {
    //({}, {sort: {createdAt: -1}}) is sorting the displayal of items after which one was created first
    const items = Collections.Items.find({}, {sort: {createdAt: -1}}).fetch();
    const totalItems = Collections.Items.find().count();
    const completedItems = Collections.Items.find({complete: true}).count();
    const percentage = Math.round((completedItems/totalItems) * 100);
    onData(null, {items, percentage});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ItemList);
