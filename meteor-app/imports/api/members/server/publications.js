import { Meteor } from 'meteor/meteor';
import Members from '../members';

Meteor.publish('all.members', () => {
  return Members.find({}, { sort: { lastIn: -1, name: 1 } });
});