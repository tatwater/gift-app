import React, { Component } from 'react';
import { Components, withCurrentUser, registerComponent } from 'meteor/vulcan:core';


class Onboarding extends Component {
  render() {
    return (
      <div>
        <h1>Great to meet you! Next, let's invite your close friends and family.</h1>
        <p>We'll group them into Circles, just like Google+ did. Remember that? Hopefully this will work a bit better... Anyway, everyone in a circle will give gifts to everyone else in that Circle, so everyone in a Circle should be close friends or family.</p>
        <Components.CirclesList />
      </div>
    );
  }
}

registerComponent({ name: 'Onboarding', component: Onboarding, hocs: [withCurrentUser] });
