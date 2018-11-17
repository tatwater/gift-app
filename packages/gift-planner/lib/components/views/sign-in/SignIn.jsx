import React, { Component } from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';


class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>Making the holidays even better</h1>
        <h4>Sign up with your email</h4>
        <Components.AccountsLoginForm />
      </div>
    );
  }
}

registerComponent({ name: 'SignIn', component: SignIn });
