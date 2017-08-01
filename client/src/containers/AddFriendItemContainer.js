import { connect } from 'react-redux';
import AddFriendItem from '../components/AddFriendItem';
import { addFriend } from '../actions/friends';

const mapStateToProps = ({ profiles, friends, user }) => ({ profiles, friends, user });

const mapDispatchToProps = (dispatch) => ({
  addFriend: (userId, friendId) => {
    dispatch(addFriend(userId, friendId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendItem);