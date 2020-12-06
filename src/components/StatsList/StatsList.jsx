import PropTypes from 'prop-types';

import s from './StatsList.module.css';
import statsItemStyle from '../StatsItem/StatsItem.module.css';
import StatsItem from '../StatsItem/StatsItem';
import getRundomColor from './getRundomColor';
const StatsList = ({ statsData }) => {
  return (
    <ul className={s.statsList}>
      {statsData.map(el => (
        <StatsItem
          key={el.id}
          Labeloption={el.label}
          quantity={el.percentage}
          labelClass={statsItemStyle.statisticalLable}
          quantityClass={statsItemStyle.statisticalQuantity}
          backgroundColor={getRundomColor()}
        />
      ))}
    </ul>
  );
};

StatsList.propTypes = {
  statsData: PropTypes.array.isRequired,
};
export default StatsList;
