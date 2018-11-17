import React, { Component } from 'react';
import { Components, withCurrentUser, registerComponent } from 'meteor/vulcan:core';


class Layout extends Component {
  render() {
    return (
      <div>
        { !this.props.currentUser ?
          <Components.Onboarding /> :
          <Components.SignIn />
        }
      </div>
    );
  }
}

registerComponent({ name: 'Layout', component: Layout, hocs: [withCurrentUser] });
