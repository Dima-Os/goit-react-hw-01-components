import s from './Avatar.module.css';

const Avatar = ({ userData: { avatar, name } }) => {
  return <img src={avatar} alt={name + 'avatar'} className={s.avatar} />;
};
export default Avatar;
