import React, { Component } from 'react';
import { Components, withMulti, withCurrentUser, registerComponent } from 'meteor/vulcan:core';

import { Gifts } from '../../modules/gifts';


class GiftsList extends Component {
  render() {
    return (
      <div>Gifts List</div>
    );
  }
}

const options = {
  collection: Gifts,
  limit: 10,
}

registerComponent({
  name: 'GiftsList',
  component: GiftsList,
  hocs: [withCurrentUser, [withMulti, options]]
});
