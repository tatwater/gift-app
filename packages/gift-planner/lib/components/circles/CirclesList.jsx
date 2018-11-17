import React, { Component } from 'react';
import { Components, withMulti, withCurrentUser, registerComponent } from 'meteor/vulcan:core';

import Circles from '../../modules/circles/collection';


class CirclesList extends Component {
  render() {
    return (
      <div>
        { this.props.loading ? <Components.Loading /> : (
          <div>
            { Circles.options.mutations.create.check( this.props.currentUser ) ? (
              <div>
                <h4>Create a new Circle</h4>
                <Components.SmartForm collection = { Circles } />
              </div>
            ) : null }

            { this.props.results.map(circle => (
              <Components.Card
                fields={ ['name'] }
                key={ Circles._id }
                collection={ Circles }
                document={ circle }
                currentUser={ this.props.currentUser }
              />
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
  collection: Circles,
  limit: 5,
}

registerComponent({ name: 'CirclesList', component: CirclesList, hocs: [withCurrentUser, [withMulti, options]] });
