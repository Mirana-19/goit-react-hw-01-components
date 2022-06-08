import PropTypes from 'prop-types';
import s from './Name.module.css';

export default function Name({ username, tag, location, avatar }) {
  return (
    <div className={s.description}>
      <img className={s.avatar} src={avatar} alt="User avatar" />
      <p className={s.username}>{username}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  );
}

Name.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
