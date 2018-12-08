import React, { Component } from 'react';
import { Components, withCurrentUser, registerComponent } from 'meteor/vulcan:core';


class Overview extends Component {
  render() {
    return (
      <div>
        <h1>Let's get gifting, { this.props.currentUser.displayName }!</h1>
        <p>Showing circles with people without a gift from me</p>
        <Components.CirclesList />
      </div>
    );
  }
}

registerComponent({
  name: 'Overview',
  component: Overview,
  hocs: [withCurrentUser]
});
