import Description from '../Description/Description';
import Stats from '../Stats/Stats';
const Profile = userData => {
  return (
    <div className="profile">
      <Description userData={userData} />
      <Stats userStats={userData.stats} />
    </div>
  );
};

export default Profile;
