import s from './StatsList.module.css';
import statsItemStyle from '../StatsItem/StatsItem.module.css';
import StatsItem from '../StatsItem/StatsItem';
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
        />
      ))}
    </ul>
  );
};
export default StatsList;
