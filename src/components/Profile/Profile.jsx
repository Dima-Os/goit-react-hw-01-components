import Description from '../Description/Description';
import Stats from '../Stats/Stats';
import user from '../../user.json';
const Profile = () => {
  return (
    <div className="profile">
      <Description />
      <Stats userStats={user} />
    </div>
  );
};

export default Profile;
