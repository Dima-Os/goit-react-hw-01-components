import PropTypes from 'prop-types';

import s from './FriendList.module.scss';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={s.item}>
      <span className={isOnline ? s.onLine : s.offLine}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return <ul className={s.friendList}>{friends.map(FriendListItem)}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
