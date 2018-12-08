import { addAction, addReducer } from 'meteor/vulcan:core';


addAction({
  uiState: {
    toggleNewGiftForm(bool) {
      return {
        type: 'TOGGLE_NEW_GIFT_FORM',
        bool: bool,
      }
    },
  }
});

addReducer({
  uiState: (state = {
    newGiftFormVisible: false,
  }, action) => {
    switch(action.type) {

      case 'TOGGLE_NEW_GIFT_FORM':
        let currentState = state.newGiftFormVisible;
        let newState;

        if (action.bool === true) {
          newState = true;
        } else if (action.bool === false) {
          newState = false;
        } else {
          newState = !currentState;
        }

        return {
          ...state,
          newGiftFormVisible: newState,
        }

      default:
        return state;
    }
  },
});
