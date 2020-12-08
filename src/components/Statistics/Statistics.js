import PropTypes from 'prop-types';

import getRandomColor from './getRandomColor';

import s from './Statistics.module.scss';

const StatisticsItem = ({ id, label, percentage }) => {
  return (
    <li
      key={id}
      className={s.item}
      style={{
        backgroundColor: getRandomColor(),
      }}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  );
};

const StatisticsList = ({ items }) => {
  return <ul className={s.statList}>{items.map(StatisticsItem)}</ul>;
};

const Statistics = ({ statisticalData }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <StatisticsList items={statisticalData} />
    </section>
  );
};

Statistics.propTypes = {
  statisticalData: PropTypes.array.isRequired,
};
StatisticsList.propTypes = {
  items: PropTypes.array.isRequired,
};
StatisticsItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

export default Statistics;
