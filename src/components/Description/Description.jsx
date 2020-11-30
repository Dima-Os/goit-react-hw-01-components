import Avatar from '../Avatar/Avatar';
import UserInfo from '../UserInfo/UserInfo';
import user from '../../user.json';
const Description = () => {
  return (
    <div className="description">
      <Avatar userData={user} />
      <UserInfo UserInfo={user} />
    </div>
  );
};
export default Description;
