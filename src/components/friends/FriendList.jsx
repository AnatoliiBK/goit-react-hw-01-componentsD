import { FriendListItem } from "./FriendListItem";
import css from "./Friends.module.css";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
      <ul className={css.friend_list}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    );
  }

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool
    }))
  }