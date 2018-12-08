import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

import schema from './schema';


export const Gifts = createCollection({
  collectionName: 'Gifts',
  typeName: 'Gift',
  schema,
  resolvers: getDefaultResolvers('Gifts'),
  mutations: getDefaultMutations('Gifts'),
});

const membersActions = [
  'gifts.new',
  'gifts.edit.own',
  'gifts.remove.own',
];
Users.groups.members.can(membersActions);

Gifts.addDefaultView((terms) => ({
  options: {
    sort: {
      createdAt: -1,
    }
  }
}));
