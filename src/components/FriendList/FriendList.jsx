import PropTypes from 'prop-types';

import FriendsListItem from '../FriendsListItem/FriendsListItem';

import s from './FriendList.module.css';

const Friendlist = ({ friendsData }) => {
  return (
    <ul className={s.list}>
      {friendsData.map(el => (
        <FriendsListItem
          friendData={el}
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};
Friendlist.propTypes = {
  friendsData: PropTypes.array.isRequired,
};
export default Friendlist;
