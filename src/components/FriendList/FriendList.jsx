import FriendListItem from './FriendListItem/FriendListItem';
import friendsData from '../../data-json/friends.json';
import s from './FriendList.module.css';

function FriendList() {
  return (
    <ul className={s.friendsList}>
      {friendsData.map(f => (
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
