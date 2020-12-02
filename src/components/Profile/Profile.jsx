import Description from '../Description/Description';
import Stats from '../Stats/Stats';
import user from '../../user.json';

import s from './Profile.module.css';

const Profile = () => {
  return (
    <section className={s.profile}>
      <Description />
      <Stats userStats={user.stats} />
    </section>
  );
};

export default Profile;
