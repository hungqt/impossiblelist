import {Categories, Items} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

//publish methods specifies explicitily what the server sends to the client
//For example, the Meteor.publish('categories.list') function sends the Categories from lib/collections AKA the mongo collection to the client
export default function (){
  Meteor.publish('categories.list', function(){
    return Categories.find();
  });

  Meteor.publish('items.list', function(){
    return Items.find();
  });

  Meteor.publish('items.single', function(itemId){
    check(itemId, String);
    const selector = {_id: itemId};
    return Items.find(selector);
  });
}
