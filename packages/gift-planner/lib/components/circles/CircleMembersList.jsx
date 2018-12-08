import React, { Component } from 'react';
import { Link } from 'react-router';
import { Components, withMulti, withCurrentUser, registerComponent } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';


class CircleMembersList extends Component {
  render() {
    return (
      <div>
        { this.props.loading ? <Components.Loading /> : (
          <div>
            { this.props.results.map(user => (
              <Link
                to={ '/' + this.props.circleID + '/' + user._id }
                key={ user._id }
              >
                <Components.Card
                  fields={ ['name'] }
                  collection={ Users }
                  document={ user }
                  currentUser={ this.props.currentUser }
                />
              </Link>
            ))}

            { this.props.totalCount > this.props.results.length && (
              <button
                type='button'
                onClick={() => { this.props.loadMore() }}
              >
                Load More ({ this.props.count }/{ this.props.totalCount })
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
}

const options = {
  collection: Users,
  limit: 0,
}

registerComponent({
  name: 'CircleMembersList',
  component: CircleMembersList,
  hocs: [withCurrentUser, [withMulti, options]]
});
