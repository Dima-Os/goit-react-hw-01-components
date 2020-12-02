import StatsItem from '../StatsItem/StatsItem';
const Stats = ({ userStats }) => {
  return (
    <ul className="stats">
      {Object.keys(userStats).map(el => (
        <StatsItem key={el} Labeloption={el} quantity={userStats[el]} />
      ))}
    </ul>
  );
};
export default Stats;
