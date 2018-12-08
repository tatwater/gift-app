import { getActions } from 'meteor/vulcan:lib';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const mapStateToProps = state => ({ uiState: state.uiState, });
const mapDispatchToProps = dispatch => bindActionCreators(getActions().uiState, dispatch);

const withUIState = (component) => connect(mapStateToProps, mapDispatchToProps)(component);


export default withUIState;
