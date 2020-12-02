import Avatar from '../Avatar/Avatar';
import UserInfo from '../UserInfo/UserInfo';
import user from '../../user.json';
import s from './Description.module.css';
const Description = () => {
  return (
    <div className={s.description}>
      <Avatar userData={user} />
      <UserInfo UserInfo={user} />
    </div>
  );
};
export default Description;
