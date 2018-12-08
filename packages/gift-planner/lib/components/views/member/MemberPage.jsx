import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { Components, withDocument, withCurrentUser, registerComponent } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

import withUIState from '../../../hocs/withUIState';


class MemberPage extends Component {
  render() {
    const { circleID } = this.props.params;

    if (this.props.loading) {
      return <Components.Loading />
    } else if (!this.props.document) {
      return (
        <div>Can't find that user</div>
      );
    } else {
      const user = this.props.document;
      const terms = { view: 'giftSuggestions', userId: user._id };

      return (
        <div>
          { this.props.loading ?
            <Components.Loading />
            :
            <div>
              <Link to={ '/' + circleID }>Back to Circle</Link>
              <h1>{ Users.getDisplayName(user) }</h1>
              <button
                type='button'
                onClick={() => { this.props.toggleNewGiftForm(true) }}
              >
                + Add an idea
              </button>
              <Components.GiftsList />
              { this.props.uiState.newGiftFormVisible &&
                <Components.GiftsNewForm />
              }
            </div>
          }
        </div>
      );
    }
  }
}

const options = {
  collection: Users,
  queryName: 'memberPageQuery',
  fragmentName: 'MemberPage',
};

registerComponent({
  name: 'MemberPage',
  component: MemberPage,
  hocs: [withCurrentUser, [withDocument, options], withUIState]
});
