import React, { Component } from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';


class Navbar extends Component {
  render() {
    return (
      <div>
        <Components.AccountsLoginForm />
      </div>
    );
  }
}

registerComponent({
  name: 'Navbar',
  component: Navbar
});
