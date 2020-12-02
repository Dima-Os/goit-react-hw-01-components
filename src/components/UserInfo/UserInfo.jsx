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

export default UserInfo;
