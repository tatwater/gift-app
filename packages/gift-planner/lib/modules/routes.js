import { addRoute } from 'meteor/vulcan:core';


addRoute({
  name: 'circles',
  path: '/',
  componentName: 'CirclesList',
  layoutName: 'Layout',
});
addRoute({
  name: 'circle',
  path: '/:circleID',
  componentName: 'CirclesItem',
  layoutName: 'Layout',
});
addRoute({
  name: 'member',
  path: '/:circleID/:memberID',
  componentName: 'MemberPage',
  layoutName: 'Layout',
});
