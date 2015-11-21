import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChatRoom from '../components/ChatRoom';
import * as CounterActions from '../actions/chat';

function mapStateToProps(state) {
  return {
    chat: state.chat,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
