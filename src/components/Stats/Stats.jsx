import PropTypes from 'prop-types';
import StatsItem from '../StatsItem/StatsItem';
import s from './Stats.module.css';
const Stats = ({ userStats }) => {
  return (
    <ul className={s.stats}>
      {Object.keys(userStats).map(el => (
        <StatsItem key={el} Labeloption={el} quantity={userStats[el]} />
      ))}
    </ul>
  );
};

Stats.propTypes = {
  userStats: PropTypes.object.isRequired,
};

export default Stats;
