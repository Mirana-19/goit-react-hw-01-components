import PropTypes, { shape } from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map(f => (
        <FriendListItem
          key={f.id}
          avatar={f.avatar}
          name={f.name}
          isOnline={f.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
}).isRequired;
