// All Events-related publications

import { Meteor } from 'meteor/meteor';
import { Events } from '../collections/events.js';

Meteor.publish('events.allEvents', function () {
  return Events.find();
});
