import React, { Component } from 'react';
import { Components, withCurrentUser, getFragment, registerComponent } from 'meteor/vulcan:core';

import withUIState  from '../../hocs/withUIState';
import { Gifts } from '../../modules/gifts';
import * as Styled from './gifts_styles';


class GiftsNewForm extends Component {
  render() {
    return (
      <Styled.NewGiftContainer>
        <Styled.Overlay
          onClick={() => { this.props.toggleNewGiftForm(false) }}
          type='button'
        />
        <Styled.NewGiftCard>
          { Gifts.options.mutations.create.check( this.props.currentUser ) ? (
            <div>
              <h1>Add a gift idea for { this.props.for }</h1>
              <Components.SmartForm
                collection={ Gifts }
                mutationFragment={ getFragment('GiftsItemFragment') }
                successCallback={ this.props.refetch }
              />
            </div>
          ) : null}
        </Styled.NewGiftCard>
      </Styled.NewGiftContainer>
    );
  }
}

registerComponent({
  name: 'GiftsNewForm',
  component: GiftsNewForm,
  hocs: [withCurrentUser, withUIState]
});
