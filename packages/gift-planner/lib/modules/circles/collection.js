import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

import schema from './schema.js';


export const Circles = createCollection({
  collectionName: 'Circles',
  typeName: 'Circle',
  schema,
  resolvers: getDefaultResolvers('Circles'),
  mutations: getDefaultMutations('Circles'),
});

const membersActions = [
  'circles.new',
  'circles.edit.own',
  'circles.remove.own',
];
Users.groups.members.can(membersActions);

Circles.addDefaultView((terms) => ({
  options: {
    sort: {
      createdAt: -1,
    }
  }
}));
