const Avatar = ({ userData: { avatar, name } }) => {
  return <img src={avatar} alt={name + 'avatar'} className="avatar" />;
};
export default Avatar;
