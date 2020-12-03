import PropTypes from 'prop-types';

import s from './Avatar.module.css';
import defaultImg from './default.jpg';
const Avatar = ({ userData: { avatar = defaultImg, name } }) => {
  return <img src={avatar} alt={name + 'avatar'} className={s.avatar} />;
};

Avatar.propTypes = {
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
};

export default Avatar;
