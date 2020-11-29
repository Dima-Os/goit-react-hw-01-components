import Avatar from '../Avatar/Avatar';
import UserInfo from '../UserInfo/UserInfo';
const Description = ({ userData: { avatar, name, tag, location } }) => {
  return (
    <div className="description">
      <Avatar avatar={avatar} name={name} />
      <UserInfo name={name} tag={tag} location={location} />
    </div>
  );
};
export default Description;
