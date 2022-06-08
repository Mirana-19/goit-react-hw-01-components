import s from './Profile.module.css';
import user from '../../data-json/user.json';
import Name from './Name/Name';
import Stats from './Stats/Stats';

function Profile() {
  return (
    <div className={s.profile}>
      {' '}
      <Name
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stats stats={user.stats} />
    </div>
  );
}

export default Profile;
