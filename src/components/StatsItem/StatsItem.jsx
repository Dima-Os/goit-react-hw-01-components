import PropTypes from 'prop-types';
import s from './StatsItem.module.css';
const StatsItem = ({ Labeloption, quantity }) => {
  return (
    <li>
      <span className={s.label}>{Labeloption}:</span>
      <span className={s.quantity}>{quantity}</span>
    </li>
  );
};

StatsItem.propTypes = {
  Labeloption: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default StatsItem;
