import { Component } from 'react';

class GiftsList extends Component {
  render() {
    return (
      <div>Gifts List</div>
    );
  }
}

const options = {
  collection: GiftsList,
  limit: 10,
}

registerComponent({ name: 'GiftsList', component: GiftsList, hocs: [withCurrentUser, [withMulti, options]] });
