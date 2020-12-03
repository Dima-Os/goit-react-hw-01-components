import PropTypes from 'prop-types';
import s from './UserInfo.module.css';

const UserInfo = ({ UserInfo: { name, tag, location } }) => {
  return (
    <>
      <p className={s.name}>{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </>
  );
};

UserInfo.propTypes = {
  UserInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};

export default UserInfo;
