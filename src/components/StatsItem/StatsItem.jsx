import PropTypes from 'prop-types';
import s from './StatsItem.module.css';
const StatsItem = ({
  Labeloption,
  quantity,
  labelClass = s.label,
  quantityClass = s.quantity,
}) => {
  return (
    <li>
      <span className={labelClass}>{Labeloption}:</span>
      <span className={quantityClass}>{quantity}</span>
    </li>
  );
};

StatsItem.propTypes = {
  Labeloption: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default StatsItem;
