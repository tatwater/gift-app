import { addRoute, getComponent } from 'meteor/vulcan:core';


addRoute({ name: 'circles', path: '/', component: getComponent('Layout') });
