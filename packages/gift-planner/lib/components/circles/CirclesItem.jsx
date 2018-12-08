import React, { Component } from 'react';
import { Link } from 'react-router';
import { Components, withDocument, withCurrentUser, registerComponent } from 'meteor/vulcan:core';

import { Circles } from '../../modules/circles';


class CirclesItem extends Component {
  render() {
    const { circleID } = this.props.params;

    return (
      <div>
        { this.props.loading ? <Components.Loading /> : (
          <div>
            <Link to='/'>Back to Circles</Link>
            <h1>{ circleID }</h1>
            <Components.CircleMembersList
              circleID={ circleID }
            />
          </div>
        )}
      </div>
    );
  }
}

const options = {
  collection: Circles,
  queryName: 'circlePageQuery',
};

registerComponent({
  name: 'CirclesItem',
  component: CirclesItem,
  hocs: [withCurrentUser, [withDocument, options]]
});
